import { PrismaService } from '@application/database/prisma.service';
import { CreateClasseDto } from '@classes/dto/create-classe.dto';
import { UpdateClasseDto } from '@classes/dto/update-classe.dto';
import { Injectable } from '@nestjs/common';
import { Classe } from '@prisma/client';

@Injectable()
export class ClassesService {
    constructor(private readonly databaseService: PrismaService) {}

    async create(createClasseDto: CreateClasseDto): Promise<Classe> {
        return await this.databaseService.classe.create({
            data: createClasseDto,
        });
    }

    async findAll(): Promise<Classe[]> {
        return await this.databaseService.classe.findMany();
    }

    async findOneByUuid(uuid: string): Promise<Classe> {
        return await this.databaseService.classe.findUnique({
            where: {
                uuid,
            },
        });
    }

    async update(updateClasseDto: UpdateClasseDto): Promise<Classe> {
        return await this.databaseService.classe.update({
            data: updateClasseDto,
            where: {
                uuid: updateClasseDto.uuid,
            },
        });
    }

    async remove(uuid: string): Promise<boolean> {
        try {
            await this.databaseService.classe.delete({
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
