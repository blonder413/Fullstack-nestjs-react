import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

export class EjemploDto {
  @IsNotEmpty({ message: 'El título no puede estar vacío' })
  titulo: string;

  @IsNotEmpty()
  descripcion: string;

  @IsNotEmpty()
  @IsNumber({}, { message: 'El precio debe ser numérico' })
  precio: number;

  @IsNotEmpty()
  @IsNumber()
  categoria_id: number;

  @IsNotEmpty()
  @IsBoolean({message: "El campo valido debe ser true o false"})
  valido: boolean;
}
