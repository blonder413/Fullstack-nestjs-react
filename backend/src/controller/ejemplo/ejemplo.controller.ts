import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('ejemplo')
export class EjemploController {
  @Get()
  index() {
    return 'Método Get';
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
}
