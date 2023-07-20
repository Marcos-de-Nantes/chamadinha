import { PrismaService } from '@application/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { Cidade } from '@prisma/client';

@Injectable()
export class CidadesService {
    constructor(private databaseService: PrismaService) {}

    async findAll(): Promise<Cidade[]> {
        return await this.databaseService.cidade.findMany();
    }

    async findOneById(id: number): Promise<Cidade> {
        return await this.databaseService.cidade.findUnique({
            where: {
                id,
            },
        });
    }
}
