import { Injectable } from '@nestjs/common';

@Injectable()
export class EjemploService {
  getTexto(param: string) {
    return `El valor del parámetro es: ${param}`;
  }
}
