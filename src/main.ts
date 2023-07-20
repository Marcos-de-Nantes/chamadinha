import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './application/database/prisma.service';

const APPLICATION_PORT = process.env.PORT || 8080;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(APPLICATION_PORT);
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            whitelist: true,
        }),
    );

    const prismaService = app.get(PrismaService);
    await prismaService.enableShutdownHooks(app);
}
bootstrap();
