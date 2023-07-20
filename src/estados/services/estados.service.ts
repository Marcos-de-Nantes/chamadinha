import { PrismaService } from '@application/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { Estado } from '@prisma/client';

@Injectable()
export class EstadosService {
    constructor(private readonly databaseService: PrismaService) {}

    async findAll(): Promise<Estado[]> {
        return await this.databaseService.estado.findMany();
    }

    async findOneById(id: number): Promise<Estado> {
        return await this.databaseService.estado.findUnique({
            where: {
                id,
            },
        });
    }
}
