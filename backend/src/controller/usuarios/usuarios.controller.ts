import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { RegistroDto } from 'src/dto/registro.dto';
import { UsuariosService } from 'src/servicios/usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  @Post('registro')
  @HttpCode(HttpStatus.CREATED)
  async registro(@Body() dto: RegistroDto, @Req() request: Request) {
    return await this.usuariosService.registro(dto, request);
  }
}
