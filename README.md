<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# NestJS

## Instalación

```bash
npm i -g @nestjs/cli
```

## Creación del proyecto

```bash
nest new backend
```

## [Validation](https://docs.nestjs.com/techniques/validation)

```bash
npm i --save class-validator class-transformer
```

### Definir validación global

El archivo `main.ts` debería quedar algo así:

```javascript
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
```

## [File upload](https://docs.nestjs.com/techniques/file-upload)

```bash
npm i -D @types/multer
```

##[Serve Static](https://docs.nestjs.com/recipes/serve-static)
Permite visualizar contenido estático como imágenes a través de la URL.

```bash
npm install --save @nestjs/serve-static
```

Luego debemos configurar el archivo `app.module.ts`

```js
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, "..", "assets"),
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
```

Después debemos crear un archivo llamado `index.html` en el directorio `assets`.
Para llamar al archivo debemos omitir el directorio especificado, en nuestro caso `assets`, llamaríamos la ruta siguiente reemplazando el nombre de la imagen:
`http://localhost:3000/uploads/1736691963524.png`

## [CORS](https://docs.nestjs.com/security/cors)

El intercambio de recursos de origen cruzada (CORS) es un mecanismo que permite solicitar recursos de otro dominio.
En `main.ts` agregamos la siguiente línea

```js
app.enableCors();
```
