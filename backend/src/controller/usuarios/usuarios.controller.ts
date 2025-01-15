import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
  Res,
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

  @Get('verificar/:token')
  @HttpCode(HttpStatus.OK)
  async verificar(@Param() param, @Res() response: Response) {
    return this.usuariosService.verficar(param.token, response);
  }
}