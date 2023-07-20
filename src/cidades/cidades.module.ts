import { PrismaService } from '@application/database/prisma.service';
import { Module } from '@nestjs/common';
import { CidadesController } from './controllers/cidades.controller';
import { CidadesService } from './services/cidades.service';

@Module({
    controllers: [CidadesController],
    providers: [PrismaService, CidadesService],
})
export class CidadesModule {}
