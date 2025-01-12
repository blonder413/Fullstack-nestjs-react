import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CategoriasService {
  private prisma: any;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getDatos() {
    return await this.prisma.categoria.findMany({ orderBy: [{ id: 'desc' }] });
  }

  async getDato(id: number) {
    const datos = await this.prisma.categoria.findFirst({ where: { id } });
    if (!datos) {
      throw new HttpException(
        'No encontrado', // {estado: HttpStatus.NOT_FOUND, mensaje: "no encontrado"},
        HttpStatus.NOT_FOUND,
        // {
        //   cause: {name: 'Error 404', message: new Error('Registro no encontrado')},
        // },
      );
    } else {
      return datos;
    }
  }
}
