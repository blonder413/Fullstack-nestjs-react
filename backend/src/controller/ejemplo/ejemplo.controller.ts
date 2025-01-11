import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('ejemplo')
export class EjemploController {
  @Get()
  index() {
    return 'Método Get';
  }

  @Post()
  create() {
    return 'Método Post';
  }

  @Put()
  update() {
    return 'Método put';
  }

  @Delete()
  destroy() {
    return 'Método delete';
  }
}
