import { PrismaService } from '@application/database/prisma.service';
import { Module } from '@nestjs/common';
import { ResponsaveisAlunosController } from './controllers/responsaveis-alunos.controller';
import { ResponsaveisAlunosService } from './services/responsaveis-alunos.service';

@Module({
    controllers: [ResponsaveisAlunosController],
    providers: [PrismaService, ResponsaveisAlunosService],
})
export class ResponsaveisAlunosModule {}
