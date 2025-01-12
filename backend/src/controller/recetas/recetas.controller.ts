import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { RecetasService } from 'src/servicios/recetas.service';

@Controller('recetas')
export class RecetasController {
  constructor(private recetasService: RecetasService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  index() {
    return this.recetasService.getDatos();
  }
}
