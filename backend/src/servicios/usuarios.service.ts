import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { RegistroDto } from 'src/dto/registro.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  private prisma: any;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async registro(dto: RegistroDto) {
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
    await this.prisma.usuario.create({
      data: {
        nombre: dto.nombre,
        correo: dto.correo,
        password: await bcrypt.hash(dto.password, 10),
        token: '',
      },
    });
    return { estado: 'ok', mensaje: 'Registro creado existosamente' };
  }
}
