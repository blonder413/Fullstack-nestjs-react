import { Module } from '@nestjs/common';
import { EjemploController } from './controller/ejemplo/ejemplo.controller';
import { RespuestaController } from './controller/respuesta/respuesta.controller';
import { EjemploService } from './servicios/ejemplo.service';
import { UploadController } from './controller/upload/upload.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { CategoriasService } from './servicios/categorias.service';
import { CategoriasController } from './controller/categorias/categorias.controller';
import { RecetasController } from './controller/recetas/recetas.controller';
import { RecetasService } from './servicios/recetas.service';
import { ContactoService } from './servicios/contacto.service';
import { ContactoController } from './controller/contacto/contacto.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'assets'),
    }),
  ],
  controllers: [EjemploController, RespuestaController, UploadController, CategoriasController, RecetasController, ContactoController],
  providers: [EjemploService, CategoriasService, RecetasService, ContactoService],
})
export class AppModule {}
