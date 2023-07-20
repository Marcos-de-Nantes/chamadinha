import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { CreateResponsaveisAlunoDto } from '@responsaveisAlunos/dto/create-responsaveis-aluno.dto';
import { UpdateResponsaveisAlunoDto } from '@responsaveisAlunos/dto/update-responsaveis-aluno.dto';
import { ResponsaveisAlunosService } from '@responsaveisAlunos/services/responsaveis-alunos.service';

@Controller('responsaveis-alunos')
export class ResponsaveisAlunosController {
    constructor(
        private readonly responsaveisAlunosService: ResponsaveisAlunosService,
    ) {}

    @Post()
    create(@Body() createResponsaveisAlunoDto: CreateResponsaveisAlunoDto) {
        return this.responsaveisAlunosService.create(
            createResponsaveisAlunoDto,
        );
    }

    @Get()
    findAll() {
        return this.responsaveisAlunosService.findAll();
    }

    @Get(':uuid')
    findOneByUuid(@Param('uuid') uuid: string) {
        return this.responsaveisAlunosService.findOneByUuid(uuid);
    }

    @Put()
    update(@Body() updateResponsaveisAlunoDto: UpdateResponsaveisAlunoDto) {
        return this.responsaveisAlunosService.update(
            updateResponsaveisAlunoDto,
        );
    }

    @Delete(':uuid')
    remove(@Param('uuid') uuid: string) {
        return this.responsaveisAlunosService.remove(uuid);
    }
}
