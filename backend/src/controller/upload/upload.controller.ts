import {
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { fileFilter } from 'src/helpers/images.helper';

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

  @Post('/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      // file es el nombre del campo recibido
      storage: diskStorage({
        destination: './assets/uploads',
        filename: (req, file, callback) => {
          callback(null, `${Date.now()}${extname(file.originalname)}`);
        },
      }),
      fileFilter: fileFilter, // filtro el tipo de archivo
    }),
  )
  upload(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          //   new FileTypeValidator({ fileType: '.(png|jpg|jpeg)' }), // igual el archivo se sube
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }), // bytes * kb * mb
        ],
      }),
    )
    data: Express.Multer.File,
  ) {
    return { estado: 'ok', mensaje: 'Se subió el archivo', data };
  }
}
