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
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
```
