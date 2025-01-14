import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ContactoDto } from 'src/dto/contacto.dto';

@Injectable()
export class ContactoService {
  private prisma: any;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(dto: ContactoDto) {
    const { nombre, correo, telefono, mensaje } = dto;
    await this.prisma.contacto.create({
      data: { nombre, correo, telefono, mensaje },
    });
    return { estado: 'ok', mensaje: 'Registro creado exitosamente' };
  }
}
