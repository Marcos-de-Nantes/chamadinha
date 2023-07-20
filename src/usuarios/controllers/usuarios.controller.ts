import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { CreateUsuarioDto } from '@usuarios/dto/create-usuario.dto';
import { UpdateUsuarioDto } from '@usuarios/dto/update-usuario.dto';
import { UsuariosService } from '@usuarios/services/usuarios.service';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService) {}

    @Post()
    async create(@Body() createUsuarioDto: CreateUsuarioDto) {
        return await this.usuariosService.create(createUsuarioDto);
    }

    @Get()
    async findAll() {
        return await this.usuariosService.findAll();
    }

    @Get(':id')
    async findOne(@Param('uuid') uuid: string) {
        return await this.usuariosService.findOne(uuid);
    }

    @Put()
    async update(@Body() updateUsuarioDto: UpdateUsuarioDto) {
        return await this.usuariosService.update(updateUsuarioDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return await this.usuariosService.remove(id);
    }
}
