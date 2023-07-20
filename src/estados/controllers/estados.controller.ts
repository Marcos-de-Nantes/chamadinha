import { EstadosService } from '@estados/services/estados.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('estados')
export class EstadosController {
    constructor(private readonly estadosService: EstadosService) {}

    @Get()
    findAll() {
        return this.estadosService.findAll();
    }

    @Get(':id')
    findOneById(@Param('id') id: number) {
        return this.estadosService.findOneById(id);
    }
}
