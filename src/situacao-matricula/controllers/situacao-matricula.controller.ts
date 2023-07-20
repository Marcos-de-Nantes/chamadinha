import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { CreateSituacaoMatriculaDto } from '@situacaoMatricula/dto/create-situacao-matricula.dto';
import { UpdateSituacaoMatriculaDto } from '@situacaoMatricula/dto/update-situacao-matricula.dto';
import { SituacaoMatriculaService } from '@situacaoMatricula/services/situacao-matricula.service';

@Controller('situacao-matricula')
export class SituacaoMatriculaController {
    constructor(
        private readonly situacaoMatriculaService: SituacaoMatriculaService,
    ) {}

    @Post()
    create(@Body() createSituacaoMatriculaDto: CreateSituacaoMatriculaDto) {
        return this.situacaoMatriculaService.create(createSituacaoMatriculaDto);
    }

    @Get()
    findAll() {
        return this.situacaoMatriculaService.findAll();
    }

    @Get(':uuid')
    findOneByUuid(@Param('uuid') uuid: string) {
        return this.situacaoMatriculaService.findOneByUuid(uuid);
    }

    @Put()
    update(@Body() updateSituacaoMatriculaDto: UpdateSituacaoMatriculaDto) {
        return this.situacaoMatriculaService.update(updateSituacaoMatriculaDto);
    }

    @Delete(':uuid')
    remove(@Param('uuid') uuid: string) {
        return this.situacaoMatriculaService.remove(uuid);
    }
}
