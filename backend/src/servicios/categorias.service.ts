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
    if (await this.existe(dto)) {
      throw new HttpException(
        `La categoría ${dto.nombre} ya existe`,
        HttpStatus.CONFLICT,
      );
    }

    await this.prisma.categoria.create({
      data: { nombre: dto.nombre, slug: slugify(dto.nombre.toLowerCase()) },
    });
    return { estado: HttpStatus.OK, mensaje: 'registro creado exitosamente' };
  }

  async existe(dto: CategoriaDto) {
    const existe = await this.prisma.categoria.findFirst({
      where: { nombre: dto.nombre },
    });
    if (existe) {
      return true;
    }
    return false;
  }

  async update(id: number, dto: CategoriaDto) {
    const datos = await this.prisma.categoria.findFirst({ where: { id } });
    if (!datos) {
      throw new HttpException(
        'No encontrado', // {estado: HttpStatus.NOT_FOUND, mensaje: "no encontrado"},
        HttpStatus.NOT_FOUND,
        // {
        //   cause: {name: 'Error 404', message: new Error('Registro no encontrado')},
        // },
      );
    }
    await this.prisma.categoria.update({
      where: { id },
      data: { nombre: dto.nombre, slug: slugify(dto.nombre.toLowerCase()) },
    });
    return { estado: HttpStatus.OK, mensaje: 'registro actualizado' };
  }

  async delete(id: number) {
    const datos = await this.prisma.categoria.findFirst({ where: { id } });
    if (!datos) {
      throw new HttpException('No existe', HttpStatus.NOT_FOUND);
    }

    const existe = await this.prisma.receta.findMany({
      where: { categoria_id: id },
    });
    if (existe.length > 0) {
      throw new HttpException('Existen recetas asociadas', HttpStatus.CONFLICT);
    }
    await this.prisma.categoria.delete({ where: { id } });
    return { estado: 'ok', mensaje: 'Registro eliminado' };
  }
}
