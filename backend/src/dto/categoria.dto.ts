import { IsNotEmpty } from 'class-validator';

export class CategoriaDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;
}
