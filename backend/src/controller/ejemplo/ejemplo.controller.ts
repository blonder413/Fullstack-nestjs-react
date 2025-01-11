import { Controller, Get } from '@nestjs/common';

@Controller('ejemplo')
export class EjemploController {
  @Get()
  index() {
    return 'Método Get';
  }
}
