import { IsEmail, IsNotEmpty } from 'class-validator';

export class RegistroDto {
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  @IsEmail()
  correo: string;

  @IsNotEmpty()
  password: string;
}
