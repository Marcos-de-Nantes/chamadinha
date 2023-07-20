import { PrismaService } from '@application/database/prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Usuario } from '@prisma/client';
import { CreateUsuarioDto } from '@usuarios/dto/create-usuario.dto';
import { UpdateUsuarioDto } from '@usuarios/dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
    constructor(private databaseService: PrismaService) {}

    async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
        const userAlreadyExists = await this.databaseService.usuario.findUnique(
            {
                select: {
                    nome: true,
                },
                where: { email: createUsuarioDto.email },
            },
        );

        if (userAlreadyExists)
            throw new BadRequestException('Usuário já existente!');

        return await this.databaseService.usuario.create({
            data: createUsuarioDto,
        });
    }

    async findAll(): Promise<Usuario[]> {
        return await this.databaseService.usuario.findMany();
    }

    async findOne(uuid: string): Promise<Usuario> {
        return await this.databaseService.usuario.findFirst({
            where: { uuid },
        });
    }

    async update(
        updateUsuarioDto: UpdateUsuarioDto,
    ): Promise<Partial<Usuario>> {
        const usuarioExiste = await this.databaseService.usuario.findUnique({
            select: {
                nome: true,
            },
            where: {
                uuid: updateUsuarioDto.uuid,
            },
        });

        if (!usuarioExiste)
            throw new BadRequestException('Usuário não encontrado!');

        return await this.databaseService.usuario.update({
            data: updateUsuarioDto,
            where: {
                uuid: updateUsuarioDto.uuid,
            },
            select: {
                uuid: true,
                nome: true,
                cpf: true,
                email: true,
                numero_telefone: true,
                data_inclusao: true,
                data_alteracao: true,
            },
        });
    }

    async remove(id: number): Promise<boolean> {
        try {
            const removedUser = await this.databaseService.usuario.delete({
                where: { id },
                select: { id: true },
            });

            return Boolean(removedUser);
        } catch (error) {
            throw new BadRequestException('Usuário não encontrado!');
        }
    }
}
