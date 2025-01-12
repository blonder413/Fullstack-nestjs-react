import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { CategoriasService } from 'src/servicios/categorias.service';

@Controller('categorias')
export class CategoriasController {
  constructor(private categoriaService: CategoriasService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  index() {
    return this.categoriaService.getDatos();
  }
}
