import { IsNotEmpty } from 'class-validator';

export class RecetaDto {
  @IsNotEmpty({ message: 'El nombre es requerido' })
  nombre: string;

  @IsNotEmpty()
  tiempo: string;

  @IsNotEmpty()
  descripcion: string;

  @IsNotEmpty()
  categoria_id: number;
}
