import { Module } from '@nestjs/common';
import { EjemploController } from './controller/ejemplo/ejemplo.controller';
import { RespuestaController } from './controller/respuesta/respuesta.controller';
import { EjemploService } from './servicios/ejemplo.service';
import { UploadController } from './controller/upload/upload.controller';

@Module({
  imports: [],
  controllers: [EjemploController, RespuestaController, UploadController],
  providers: [EjemploService],
})
export class AppModule {}
