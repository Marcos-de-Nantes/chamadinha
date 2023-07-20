import { PrismaService } from '@application/database/prisma.service';
import { Module } from '@nestjs/common';
import { ResponsaveisController } from './controllers/responsaveis.controller';
import { ResponsaveisService } from './services/responsaveis.service';

@Module({
    controllers: [ResponsaveisController],
    providers: [PrismaService, ResponsaveisService],
})
export class ResponsaveisModule {}
