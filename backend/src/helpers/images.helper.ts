import { BadRequestException } from '@nestjs/common';

export const fileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
    return callback(
      new BadRequestException('solo se permiten archivos de imágenes'),
      false,
    );
  }
  // (error, aceptamos el archivo)
  callback(null, true);
};
