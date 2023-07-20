import { PrismaService } from '@application/database/prisma.service';
import { Module } from '@nestjs/common';
import { EstadosController } from './controllers/estados.controller';
import { EstadosService } from './services/estados.service';

@Module({
    controllers: [EstadosController],
    providers: [PrismaService, EstadosService],
})
export class EstadosModule {}
