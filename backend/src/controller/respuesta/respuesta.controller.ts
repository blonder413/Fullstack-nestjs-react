import {
  Body,
  Controller,
  Delete,
  Get,
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
  index():EjemploInterface {
    return { estado: 'ok', mensaje: 'Método get' };
  }

  @Get(':id')
  show(@Param('id') id: number) {
    return { estado: 'ok', mensaje: 'Método get', data: { id } };
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() data: EjemploDto) {
    return { estado: 'ok', mensaje: 'método post', data };
  }

  @Put('/:id')
  update(@Param('id') id: number) {
    return { estado: 'ok', mensaje: 'Método put', data: { id } };
  }

  @Delete('/:id')
  destroy(@Param('id') id: number) {
    return { estado: 'ok', mensaje: 'Método delete', data: { id } };
  }
}
