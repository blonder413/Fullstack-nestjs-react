import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CategoriaDto } from 'src/dto/categoria.dto';
import { CategoriasService } from 'src/servicios/categorias.service';

@Controller('categorias')
export class CategoriasController {
  constructor(private categoriaService: CategoriasService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  index() {
    return this.categoriaService.getDatos();
  }

  @Get('/:id')
  show(@Param('id') id: number) {
    return this.categoriaService.getDato(+id); // + convierte el dato a number
  }

  @Post()
  create(@Body() dto: CategoriaDto) {
    return this.categoriaService.create(dto);
  }
}
