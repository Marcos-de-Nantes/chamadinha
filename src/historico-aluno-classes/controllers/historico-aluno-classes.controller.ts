import { CreateHistoricoAlunoClasseDto } from '@historicoAlunoClasses/dto/create-historico-aluno-classe.dto';
import { UpdateHistoricoAlunoClasseDto } from '@historicoAlunoClasses/dto/update-historico-aluno-classe.dto';
import { HistoricoAlunoClassesService } from '@historicoAlunoClasses/services/historico-aluno-classes.service';
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';

@Controller('historico-aluno-classes')
export class HistoricoAlunoClassesController {
    constructor(
        private readonly historicoAlunoClassesService: HistoricoAlunoClassesService,
    ) {}

    @Post()
    create(
        @Body() createHistoricoAlunoClasseDto: CreateHistoricoAlunoClasseDto,
    ) {
        return this.historicoAlunoClassesService.create(
            createHistoricoAlunoClasseDto,
        );
    }

    @Get()
    findAll() {
        return this.historicoAlunoClassesService.findAll();
    }

    @Get(':uuid')
    findOneByUuuuid(@Param('uuid') uuid: string) {
        return this.historicoAlunoClassesService.findOneByUuid(uuid);
    }

    @Put()
    update(
        @Body() updateHistoricoAlunoClasseDto: UpdateHistoricoAlunoClasseDto,
    ) {
        return this.historicoAlunoClassesService.update(
            updateHistoricoAlunoClasseDto,
        );
    }

    @Delete(':uuid')
    remove(@Param('uuid') uuid: string) {
        return this.historicoAlunoClassesService.remove(uuid);
    }
}
