import { Module } from '@nestjs/common';
import { EjemploController } from './controller/ejemplo/ejemplo.controller';
import { RespuestaController } from './controller/respuesta/respuesta.controller';
import { EjemploService } from './servicios/ejemplo.service';

@Module({
  imports: [],
  controllers: [EjemploController, RespuestaController],
  providers: [EjemploService],
})
export class AppModule {}
