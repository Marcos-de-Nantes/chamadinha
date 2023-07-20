import { PrismaService } from '@application/database/prisma.service';
import { Module } from '@nestjs/common';
import { SituacaoMatriculaController } from './controllers/situacao-matricula.controller';
import { SituacaoMatriculaService } from './services/situacao-matricula.service';

@Module({
    controllers: [SituacaoMatriculaController],
    providers: [PrismaService, SituacaoMatriculaService],
})
export class SituacaoMatriculaModule {}
