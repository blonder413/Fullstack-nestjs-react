import { Module } from '@nestjs/common';
import { EjemploController } from './controller/ejemplo/ejemplo.controller';

@Module({
  imports: [],
  controllers: [EjemploController],
  providers: [],
})
export class AppModule {}
