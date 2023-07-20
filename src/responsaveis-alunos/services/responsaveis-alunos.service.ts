import { PrismaService } from '@application/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { ResponsavelAluno } from '@prisma/client';
import { CreateResponsaveisAlunoDto } from '@responsaveisAlunos/dto/create-responsaveis-aluno.dto';
import { UpdateResponsaveisAlunoDto } from '@responsaveisAlunos/dto/update-responsaveis-aluno.dto';

@Injectable()
export class ResponsaveisAlunosService {
    constructor(private readonly databaseService: PrismaService) {}

    async create(
        createResponsaveisAlunoDto: CreateResponsaveisAlunoDto,
    ): Promise<ResponsavelAluno> {
        return await this.databaseService.responsavelAluno.create({
            data: createResponsaveisAlunoDto,
        });
    }

    async findAll(): Promise<ResponsavelAluno[]> {
        return await this.databaseService.responsavelAluno.findMany();
    }

    async findOneByUuid(uuid: string): Promise<ResponsavelAluno> {
        return await this.databaseService.responsavelAluno.findUnique({
            where: {
                uuid,
            },
        });
    }

    async update(
        updateResponsaveisAlunoDto: UpdateResponsaveisAlunoDto,
    ): Promise<ResponsavelAluno> {
        return await this.databaseService.responsavelAluno.update({
            data: updateResponsaveisAlunoDto,
            where: {
                uuid: updateResponsaveisAlunoDto.uuid,
            },
        });
    }

    async remove(uuid: string): Promise<boolean> {
        try {
            await this.databaseService.responsavelAluno.delete({
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
