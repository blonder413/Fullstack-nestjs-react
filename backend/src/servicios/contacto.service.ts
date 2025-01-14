import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ContactoDto } from 'src/dto/contacto.dto';

@Injectable()
export class ContactoService {
  private prisma: any;

  constructor(private readonly mailerService: MailerService) {
    this.prisma = new PrismaClient();
  }

  async create(dto: ContactoDto) {
    const { nombre, correo, telefono, mensaje } = dto;
    await this.prisma.contacto.create({
      data: { nombre, correo, telefono, mensaje },
    });
    //   envío del email
    await this.mailerService.sendMail({
      from: "Prueba Nestjs '<admin@midasingenieria.com>'",
      to: correo,
      subject: 'Prueba contacto nestjs',
      html: mensaje,
    });
    return { estado: 'ok', mensaje: 'Registro creado exitosamente' };
  }
}
