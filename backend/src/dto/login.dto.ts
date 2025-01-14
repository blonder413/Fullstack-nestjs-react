import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsEmail()
  correo: string;

  @IsNotEmpty()
  password: string;
}
