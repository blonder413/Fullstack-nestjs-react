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

## [Serve Static](https://docs.nestjs.com/recipes/serve-static)

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

## [Configuration](https://docs.nestjs.com/techniques/configuration)

Permite configurar la compatibilidad con archivos .env

```bash
npm i --save @nestjs/config
```

Luego hay que configurar el archivo `app.module.ts`

```js
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [ConfigModule.forRoot()],
})
export class AppModule {}
```

## [Prisma](https://docs.nestjs.com/recipes/prisma)

```bash
npm install prisma --save-dev
npx prisma
npx prisma init
```

### Ejecute una migración para crear sus tablas de bases de datos con Prisma Migrate

Ejecute el siguiente comando para crear la base de datos y las tablas según los modelos definidos

```bash
npx prisma migrate dev --name init
```

Es posible que tengamos un error similar al siguiente

```
Error: P1010: User `blonder413` was denied access on the database `cc_nest`
```

En mi caso es porque el usuario `blonder413` no tiene permisos para crear la base de datos.
Para solucionar esto lo primero que voy a hacer es crear la base de datos y darle permisos a mi usuario.

```mysql
create database cc_nest;
grant all privileges on cc_nest.* to blonder413@localhost;
flush privileges;
```

Luego de intentarlo de nuevo podemos tener un error como el siguiente

```
Error: P3014

Prisma Migrate could not create the shadow database. Please make sure the database user has permission to create databases. Read more about the shadow database (and workarounds) at https://pris.ly/d/migrate-shadow

Original error: Error code: P1010

User `blonder413` was denied access on the database `cc_nest
```

El problema en este caso es ocasionado porque intenta crear una base de datos que ya existe.
Para solucionarlo, lo que debemos hacer es ejecutar el siguiente comando:

```bash
npx prisma db push
```

## [slugify](https://www.npmjs.com/package/slugify)

```bash
npm i slugify
```

## [NodeMailer](https://www.npmjs.com/package/@nestjs-modules/mailer)

```bash
npm install --save @nestjs-modules/mailer nodemailer
npm install --save-dev @types/nodemailer
```

## [Passport (authentication)](https://docs.nestjs.com/recipes/passport)

```bash
npm install --save @nestjs/passport passport passport-local
npm install --save-dev @types/passport-local
npm install --save @nestjs/jwt passport-jwt
npm install --save-dev @types/passport-jwt
npm i bcrypt
npm i -D @types/bcrypt
npm install uuid
```

# [Guards](https://docs.nestjs.com/guards)

```bash
nest g guard guard/jwt-auth
```
