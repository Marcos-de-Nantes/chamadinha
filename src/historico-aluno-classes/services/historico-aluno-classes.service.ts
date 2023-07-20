import { PrismaService } from '@application/database/prisma.service';
import { CreateHistoricoAlunoClasseDto } from '@historicoAlunoClasses/dto/create-historico-aluno-classe.dto';
import { UpdateHistoricoAlunoClasseDto } from '@historicoAlunoClasses/dto/update-historico-aluno-classe.dto';
import { Injectable } from '@nestjs/common';
import { HistoricoAlunoClasse } from '@prisma/client';

@Injectable()
export class HistoricoAlunoClassesService {
    constructor(private readonly databaseService: PrismaService) {}

    async create(
        createHistoricoAlunoClasseDto: CreateHistoricoAlunoClasseDto,
    ): Promise<HistoricoAlunoClasse> {
        return await this.databaseService.historicoAlunoClasse.create({
            data: createHistoricoAlunoClasseDto,
        });
    }

    async findAll(): Promise<HistoricoAlunoClasse[]> {
        return await this.databaseService.historicoAlunoClasse.findMany();
    }

    async findOneByUuid(uuid: string): Promise<HistoricoAlunoClasse> {
        return await this.databaseService.historicoAlunoClasse.findUnique({
            where: {
                uuid,
            },
        });
    }

    async update(
        updateHistoricoAlunoClasseDto: UpdateHistoricoAlunoClasseDto,
    ): Promise<HistoricoAlunoClasse> {
        return await this.databaseService.historicoAlunoClasse.update({
            data: updateHistoricoAlunoClasseDto,
            where: {
                uuid: updateHistoricoAlunoClasseDto.uuid,
            },
        });
    }

    async remove(uuid: string): Promise<boolean> {
        try {
            await this.databaseService.historicoAlunoClasse.delete({
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
