import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import slugify from 'slugify';
import { CategoriaDto } from 'src/dto/categoria.dto';

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

  async create(dto: CategoriaDto) {
    await this.prisma.categoria.create({
      data: { nombre: dto.nombre, slug: slugify(dto.nombre.toLowerCase()) },
    });
    return { estado: HttpStatus.OK, mensaje: 'registro creado exitosamente' };
  }
}
