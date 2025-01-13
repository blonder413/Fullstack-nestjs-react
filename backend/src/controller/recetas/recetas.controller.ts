import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  Put,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { RecetaDto } from 'src/dto/receta.dto';
import { fileFilter } from 'src/helpers/images.helper';
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
        descripcion: dato.descripcion,
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
  @UseInterceptors(
    FileInterceptor('file', {
      // file es el nombre del campo recibido
      storage: diskStorage({
        destination: './assets/uploads/recetas',
        filename: (req, file, callback) => {
          callback(null, `${Date.now()}${extname(file.originalname)}`);
        },
      }),
      fileFilter: fileFilter, // filtro el tipo de archivo
    }),
  )
  create(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          //   new FileTypeValidator({ fileType: '.(png|jpg|jpeg)' }), // igual el archivo se sube
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }), // bytes * kb * mb
        ],
      }),
    )
    file: Express.Multer.File,
    @Body() dto: RecetaDto,
  ) {
    return this.recetasService.create(dto, file.filename);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() dto: RecetaDto) {
    return this.recetasService.update(+id, dto);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.recetasService.delete(+id);
  }

  @Post('/update-foto')
  @UseInterceptors(
    FileInterceptor('file', {
      // file es el nombre del campo recibido
      storage: diskStorage({
        destination: './assets/uploads/recetas',
        filename: (req, file, callback) => {
          callback(null, `${Date.now()}${extname(file.originalname)}`);
        },
      }),
      fileFilter: fileFilter, // filtro el tipo de archivo
    }),
  )
  updateFoto(
    @Body('id') id: number,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          //   new FileTypeValidator({ fileType: '.(png|jpg|jpeg)' }), // igual el archivo se sube
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }), // bytes * kb * mb
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    return this.recetasService.updateFoto(+id, file.filename);
  }
}
