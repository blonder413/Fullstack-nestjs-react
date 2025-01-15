import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { RegistroDto } from 'src/dto/registro.dto';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { Request } from 'express';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class UsuariosService {
  private prisma: any;

  constructor(private readonly mailerService: MailerService) {
    this.prisma = new PrismaClient();
  }

  async registro(dto: RegistroDto, request: Request) {
    const existe = await this.prisma.usuario.findFirst({
      where: { correo: dto.correo },
    });

    if (existe) {
      throw new HttpException(
        'Ya existe el usuario', // {estado: HttpStatus.NOT_FOUND, mensaje: "no encontrado"},
        HttpStatus.CONFLICT,
        // {
        //   cause: {name: 'Error 404', message: new Error('Registro no encontrado')},
        // },
      );
    }
    const token = uuidv4();
    const url = `${request.protocol}://${request.get('Host')}/api/v1/usuarios/verificacion/${token}`;
    await this.prisma.usuario.create({
      data: {
        nombre: dto.nombre,
        correo: dto.correo,
        password: await bcrypt.hash(dto.password, 10),
        token: '',
      },
    });
    await this.mailerService.sendMail({
      from: "Prueba Nestjs '<admin@midasingenieria.com>'",
      to: dto.correo,
      subject: 'Verificación de cuenta',
      html: `Hola ${dto.nombre} se ha registrado exitosamente. Click aquí para verificar.<br>
      <a href="${url}">${url}</a>`,
    });
    return { estado: 'ok', mensaje: 'Registro creado existosamente' };
  }

  async verficar(token: any, response: any) {
    const dato = await this.prisma.usuario.findFirst({
      where: { token, estado_id: 2 },
    });
    if (!dato) {
      throw new HttpException(
        'No existe el usuario', // {estado: HttpStatus.NOT_FOUND, mensaje: "no encontrado"},
        HttpStatus.NOT_FOUND,
        // {
        //   cause: {name: 'Error 404', message: new Error('Registro no encontrado')},
        // },
      );
    }
    await this.prisma.usuario.update({
      where: { id: dato.id },
      data: { token: '', estado_id: 1 },
    });
    return response.redirect('http://localhost:5173/login');
  }
}