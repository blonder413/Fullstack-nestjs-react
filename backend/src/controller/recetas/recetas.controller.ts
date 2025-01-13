import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { RecetaDto } from 'src/dto/receta.dto';
import { RecetasService } from 'src/servicios/recetas.service';

@Controller('recetas')
export class RecetasController {
  constructor(private recetasService: RecetasService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async index(@Req() request: Request) {
    const datos = this.recetasService.getDatos();
    const categorias = Array();
    for (const dato of await datos) {
      categorias.push({
        id: dato.id,
        nombre: dato.nombre,
        slug: dato.slug,
        tiempo: dato.tiempo,
        fecha: dato.fecha.toLocaleDateString('es-CO'),
        foto: `${request.protocol}://${request.get('Host')}/uploads/recetas/${dato.foto}`,
        categoria_id: dato.categoria.id,
        categoria: dato.categoria.nombre,
      });
    }
    return categorias;
  }

  @Get('/:id')
  async show(@Param('id') id: number, @Req() request: Request) {
    const dato = await this.recetasService.getDato(+id); // + convierte el dato a number
    return {
      id: dato.id,
      nombre: dato.nombre,
      slug: dato.slug,
      tiempo: dato.tiempo,
      fecha: dato.fecha.toLocaleDateString('es-CO'),
      foto: `${request.protocol}://${request.get('Host')}/uploads/recetas/${dato.foto}`,
      categoria_id: dato.categoria.id,
      categoria: dato.categoria.nombre,
    };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto:RecetaDto){
    // HACER: Cambiar el valor de la foto
    return this.recetasService.create(dto, '1736691963524.png')
  }
}
