import { CreateAlunoDto } from '@alunos/dto/create-aluno.dto';
import { UpdateAlunoDto } from '@alunos/dto/update-aluno.dto';
import { PrismaService } from '@application/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { Aluno } from '@prisma/client';

@Injectable()
export class AlunosService {
    constructor(private readonly databaseService: PrismaService) {}

    async create(createAlunoDto: CreateAlunoDto): Promise<Aluno> {
        return await this.databaseService.aluno.create({
            data: {
                ...createAlunoDto,
                data_nascimento: new Date(createAlunoDto.data_nascimento),
                data_matricula: new Date(createAlunoDto.data_matricula),
            },
        });
    }

    async findAll(): Promise<Aluno[]> {
        return await this.databaseService.aluno.findMany();
    }

    async findOneByUuid(uuid: string): Promise<Aluno> {
        return await this.databaseService.aluno.findUnique({
            where: {
                uuid,
            },
        });
    }

    // TODO consertar essa gambiarra
    async update(updateAlunoDto: UpdateAlunoDto): Promise<Aluno> {
        let data = updateAlunoDto;

        if (updateAlunoDto.data_matricula) {
            data = {
                ...updateAlunoDto,
                data_matricula: new Date(updateAlunoDto.data_matricula),
            };
        }

        if (updateAlunoDto.data_nascimento) {
            data = {
                ...updateAlunoDto,
                data_nascimento: new Date(updateAlunoDto.data_nascimento),
            };
        }

        return await this.databaseService.aluno.update({
            data: data,
            where: {
                uuid: updateAlunoDto.uuid,
            },
        });
    }

    async remove(uuid: string): Promise<boolean> {
        const usuarioRemovido = await this.databaseService.aluno.delete({
            where: {
                uuid,
            },
        });

        if (!usuarioRemovido) {
            return false;
        }

        return true;
    }
}
