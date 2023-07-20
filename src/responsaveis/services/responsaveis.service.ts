import { PrismaService } from '@application/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { Responsavel } from '@prisma/client';
import { CreateResponsaveisDto } from '@responsaveis/dto/create-responsaveis.dto';
import { UpdateResponsaveisDto } from '@responsaveis/dto/update-responsaveis.dto';

@Injectable()
export class ResponsaveisService {
    constructor(private readonly databaseService: PrismaService) {}

    async create(
        createResponsaveisDto: CreateResponsaveisDto,
    ): Promise<Responsavel> {
        return await this.databaseService.responsavel.create({
            data: createResponsaveisDto,
        });
    }

    async findAll(): Promise<Responsavel[]> {
        return await this.databaseService.responsavel.findMany();
    }

    async findOneByUuid(uuid: string): Promise<Responsavel> {
        return this.databaseService.responsavel.findUnique({
            where: {
                uuid,
            },
        });
    }

    async update(
        updateResponsaveisDto: UpdateResponsaveisDto,
    ): Promise<Responsavel> {
        return this.databaseService.responsavel.update({
            data: updateResponsaveisDto,
            where: {
                uuid: updateResponsaveisDto.uuid,
            },
        });
    }

    async remove(uuid: string): Promise<boolean> {
        try {
            await this.databaseService.responsavel.delete({
                where: {
                    uuid,
                },
            });

            return true;
        } catch (error) {
            return false;
        }
    }
}
