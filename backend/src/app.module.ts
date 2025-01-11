import { Module } from '@nestjs/common';
import { EjemploController } from './controller/ejemplo/ejemplo.controller';
import { RespuestaController } from './controller/respuesta/respuesta.controller';

@Module({
  imports: [],
  controllers: [EjemploController, RespuestaController],
  providers: [],
})
export class AppModule {}
