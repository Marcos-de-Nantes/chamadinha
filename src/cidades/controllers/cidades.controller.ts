import { CidadesService } from '@cidades/services/cidades.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('cidades')
export class CidadesController {
    constructor(private readonly cidadesService: CidadesService) {}

    @Get()
    findAll() {
        return this.cidadesService.findAll();
    }

    @Get(':id')
    findOneById(@Param('id') id: number) {
        return this.cidadesService.findOneById(id);
    }
}
