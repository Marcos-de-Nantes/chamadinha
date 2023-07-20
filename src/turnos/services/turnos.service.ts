import { PrismaService } from '@application/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { Turno } from '@prisma/client';
import { CreateTurnoDto } from '@turnos/dto/create-turno.dto';
import { UpdateTurnoDto } from '@turnos/dto/update-turno.dto';

@Injectable()
export class TurnosService {
    constructor(private readonly databaseService: PrismaService) {}

    async create(createTurnoDto: CreateTurnoDto): Promise<Turno> {
        return await this.databaseService.turno.create({
            data: createTurnoDto,
        });
    }

    async findAll(): Promise<Turno[]> {
        return await this.databaseService.turno.findMany();
    }

    async findOne(uuid: string): Promise<Turno> {
        return await this.databaseService.turno.findUnique({
            where: {
                uuid,
            },
        });
    }

    async update(updateTurnoDto: UpdateTurnoDto): Promise<Turno> {
        return await this.databaseService.turno.update({
            data: updateTurnoDto,
            where: {
                uuid: updateTurnoDto.uuid,
            },
        });
    }

    async remove(uuid: string): Promise<boolean> {
        try {
            await this.databaseService.turno.delete({
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
