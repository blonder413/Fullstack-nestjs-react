import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ContactoDto } from 'src/dto/contacto.dto';
import { ContactoService } from 'src/servicios/contacto.service';

@Controller('contacto')
export class ContactoController {
  constructor(private contactoService: ContactoService) {}

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ValidationPipe())
  create(@Body() dto: ContactoDto) {
    return this.contactoService.create(dto);
  }
}
