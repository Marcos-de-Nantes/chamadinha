import { PrismaService } from '@application/database/prisma.service';
import { Module } from '@nestjs/common';
import { TurnosController } from './controllers/turnos.controller';
import { TurnosService } from './services/turnos.service';

@Module({
    controllers: [TurnosController],
    providers: [PrismaService, TurnosService],
})
export class TurnosModule {}
