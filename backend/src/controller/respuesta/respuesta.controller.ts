import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { EjemploDto } from 'src/dto/ejemplo.dto';
import { EjemploInterface } from 'src/interfaces/ejemplo-interface.interface';

@Controller('respuesta')
export class RespuestaController {
  @Get()
  @Header('cabecero-personalizado', 'blonder413')
  @HttpCode(HttpStatus.OK)
  index(): EjemploInterface {
    return { estado: 'ok', mensaje: 'Método get' };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  show(@Param('id') id: number) {
    return { estado: 'ok', mensaje: 'Método get', data: { id } };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ValidationPipe())
  create(@Body() data: EjemploDto) {
    return { estado: 'ok', mensaje: 'método post', data };
  }

  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: number) {
    return { estado: 'ok', mensaje: 'Método put', data: { id } };
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  destroy(@Param('id') id: number) {
    return { estado: 'ok', mensaje: 'Método delete', data: { id } };
  }
}
