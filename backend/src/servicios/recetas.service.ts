import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import slugify from 'slugify';
import { RecetaDto } from 'src/dto/receta.dto';
import * as fs from 'fs';

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

  async create(dto: RecetaDto, foto: any) {
    const categoria = await this.prisma.categoria.findFirst({
      where: { id: +dto.categoria_id },
    });
    if (!categoria) {
      fs.unlink(`./assets/uploads/recetas/${foto}`, () => {});
      throw new HttpException(
        'No encontrado', // {estado: HttpStatus.NOT_FOUND, mensaje: "no encontrado"},
        HttpStatus.NOT_FOUND,
        // {
        //   cause: {name: 'Error 404', message: new Error('Registro no encontrado')},
        // },
      );
    }
    const existe = await this.prisma.receta.findFirst({
      where: { nombre: dto.nombre },
    });
    if (existe) {
      fs.unlink(`./assets/uploads/recetas/${foto}`, () => {});
      throw new HttpException(
        'Ya existe la categoría', // {estado: HttpStatus.NOT_FOUND, mensaje: "no encontrado"},
        HttpStatus.CONFLICT,
        // {
        //   cause: {name: 'Error 404', message: new Error('Registro no encontrado')},
        // },
      );
    }
    await this.prisma.receta.create({
      data: {
        nombre: dto.nombre,
        slug: slugify(dto.nombre.toLowerCase()),
        tiempo: dto.tiempo,
        descripcion: dto.descripcion,
        categoria_id: +dto.categoria_id,
        foto,
      },
    });
    return { estado: 'ok', mensaje: 'registro creado exitosamente' };
  }
}
