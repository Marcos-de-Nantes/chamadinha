import { PrismaService } from '@application/database/prisma.service';
import { Module } from '@nestjs/common';
import { HistoricoAlunoClassesController } from './controllers/historico-aluno-classes.controller';
import { HistoricoAlunoClassesService } from './services/historico-aluno-classes.service';

@Module({
    controllers: [HistoricoAlunoClassesController],
    providers: [PrismaService, HistoricoAlunoClassesService],
})
export class HistoricoAlunoClassesModule {}
