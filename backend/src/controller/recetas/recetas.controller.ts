import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { RecetasService } from 'src/servicios/recetas.service';

@Controller('recetas')
export class RecetasController {
  constructor(private recetasService: RecetasService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async index() {
    const datos = this.recetasService.getDatos();
    const categorias = Array();
    for (const dato of await datos) {
      categorias.push({
        id: dato.id,
        nombre: dato.nombre,
        slug: dato.slug,
        tiempo: dato.tiempo,
        fecha: dato.fecha,
        foto: dato.foto,
        categoria_id: dato.categoria.id,
        categoria: dato.categoria.nombre,
      });
    }
    return categorias;
  }
}
