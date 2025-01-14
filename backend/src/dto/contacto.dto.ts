import { IsEmail, IsNotEmpty } from 'class-validator';

export class ContactoDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'El correo ingresado no es valido' })
  correo: string;

  @IsNotEmpty()
  telefono: string;

  @IsNotEmpty()
  mensaje: string;
}
