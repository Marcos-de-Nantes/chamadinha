import { CreateAlunoDto } from '@alunos/dto/create-aluno.dto';
import { UpdateAlunoDto } from '@alunos/dto/update-aluno.dto';
import { AlunosService } from '@alunos/services/alunos.service';
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';

@Controller('alunos')
export class AlunosController {
    constructor(private readonly alunosService: AlunosService) {}

    @Post()
    create(@Body() createAlunoDto: CreateAlunoDto) {
        return this.alunosService.create(createAlunoDto);
    }

    @Get()
    findAll() {
        return this.alunosService.findAll();
    }

    @Get(':uuid')
    findOne(@Param('uuid') uuid: string) {
        return this.alunosService.findOneByUuid(uuid);
    }

    @Put()
    update(@Body() updateAlunoDto: UpdateAlunoDto) {
        return this.alunosService.update(updateAlunoDto);
    }

    @Delete(':uuid')
    remove(@Param('uuid') uuid: string) {
        return this.alunosService.remove(uuid);
    }
}
