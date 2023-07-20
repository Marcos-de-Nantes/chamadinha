import { PrismaService } from '@application/database/prisma.service';
import { Module } from '@nestjs/common';
import { AlunosController } from './controllers/alunos.controller';
import { AlunosService } from './services/alunos.service';

@Module({
    controllers: [AlunosController],
    providers: [PrismaService, AlunosService],
})
export class AlunosModule {}
