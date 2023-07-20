import { PrismaService } from '@application/database/prisma.service';
import { Module } from '@nestjs/common';
import { ClassesController } from './controllers/classes.controller';
import { ClassesService } from './services/classes.service';

@Module({
    controllers: [ClassesController],
    providers: [PrismaService, ClassesService],
})
export class ClassesModule {}
