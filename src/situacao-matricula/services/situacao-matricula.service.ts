import { PrismaService } from '@application/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { SituacaoMatricula } from '@prisma/client';
import { CreateSituacaoMatriculaDto } from '../dto/create-situacao-matricula.dto';
import { UpdateSituacaoMatriculaDto } from '../dto/update-situacao-matricula.dto';

@Injectable()
export class SituacaoMatriculaService {
    constructor(private readonly databaseService: PrismaService) {}

    async create(
        createSituacaoMatriculaDto: CreateSituacaoMatriculaDto,
    ): Promise<SituacaoMatricula> {
        return await this.databaseService.situacaoMatricula.create({
            data: createSituacaoMatriculaDto,
        });
    }

    async findAll(): Promise<SituacaoMatricula[]> {
        return await this.databaseService.situacaoMatricula.findMany();
    }

    async findOneByUuid(uuid: string): Promise<SituacaoMatricula> {
        return this.databaseService.situacaoMatricula.findUnique({
            where: {
                uuid,
            },
        });
    }

    async update(
        updateSituacaoMatriculaDto: UpdateSituacaoMatriculaDto,
    ): Promise<SituacaoMatricula> {
        return await this.databaseService.situacaoMatricula.update({
            data: updateSituacaoMatriculaDto,
            where: {
                uuid: updateSituacaoMatriculaDto.uuid,
            },
        });
    }

    async remove(uuid: string): Promise<boolean> {
        try {
            await this.databaseService.situacaoMatricula.delete({
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
