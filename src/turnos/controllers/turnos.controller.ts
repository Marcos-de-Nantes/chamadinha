import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { CreateTurnoDto } from '@turnos/dto/create-turno.dto';
import { UpdateTurnoDto } from '@turnos/dto/update-turno.dto';
import { TurnosService } from '@turnos/services/turnos.service';

@Controller('turnos')
export class TurnosController {
    constructor(private readonly turnosService: TurnosService) {}

    @Post()
    create(@Body() createTurnoDto: CreateTurnoDto) {
        return this.turnosService.create(createTurnoDto);
    }

    @Get()
    findAll() {
        return this.turnosService.findAll();
    }

    @Get(':uuid')
    findOne(@Param('uuid') uuid: string) {
        return this.turnosService.findOne(uuid);
    }

    @Put()
    update(@Body() updateTurnoDto: UpdateTurnoDto) {
        return this.turnosService.update(updateTurnoDto);
    }

    @Delete(':uuid')
    remove(@Param('uuid') uuid: string) {
        return this.turnosService.remove(uuid);
    }
}
