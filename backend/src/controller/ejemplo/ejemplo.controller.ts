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

@Controller('ejemplo')
export class EjemploController {
  @Get()
  index() {
    return 'Método Get';
  }

  @Get('/archivo-env')
  archivoEnv() {
    return `APP_NAME = ${process.env.APP_NAME}`;
  }

  @Get(':id')
  show(@Param() param) {
    return `Método get: ${param.id}`;
  }

  @Post()
  create(@Body() body) {
    return `Método Post:  ${body.correo} ${body.password}`;
  }

  @Put('/:id')
  update(@Param('id') id: number) {
    return 'Método put: ' + id;
  }

  @Delete('/:id')
  destroy(@Param() param) {
    return 'Método delete: ' + param.id;
  }

  @Post('/producto')
  @UsePipes(new ValidationPipe())
  producto(@Body() dto: EjemploDto) {
    return `Título: ${dto.titulo}. Descripción: ${dto.descripcion}`;
  }
}
