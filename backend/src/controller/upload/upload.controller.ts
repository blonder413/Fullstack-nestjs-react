import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      // file es el nombre del campo recibido
      storage: diskStorage({
        destination: './assets/uploads',
        filename: (req, file, callback) => {
          callback(null, `${Date.now()}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  index(@UploadedFile() data: Express.Multer.File) {
    return { estado: 'ok', mensaje: 'Se subió el archivo', data };
  }
}
