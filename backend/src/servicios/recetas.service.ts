import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class RecetasService {
  private prisma: any;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getDatos() {
    return await this.prisma.receta.findMany({
      orderBy: [{ id: 'desc' }],
      select: {
        id: true,
        nombre: true,
        slug: true,
        tiempo: true,
        descripcion: true,
        fecha: true,
        foto: true,
        categoria: true,
      },
    });
  }

  async getDato(id: number) {
    const dato = await this.prisma.receta.findFirst({
      where: { id },
      select: {
        id: true,
        nombre: true,
        slug: true,
        tiempo: true,
        descripcion: true,
        fecha: true,
        foto: true,
        categoria: true,
      },
    });
    if (!dato) {
      throw new HttpException(
        'No encontrado', // {estado: HttpStatus.NOT_FOUND, mensaje: "no encontrado"},
        HttpStatus.NOT_FOUND,
        // {
        //   cause: {name: 'Error 404', message: new Error('Registro no encontrado')},
        // },
      );
    } else {
      return dato;
    }
  }
}
