import { CreateClasseDto } from '@classes/dto/create-classe.dto';
import { UpdateClasseDto } from '@classes/dto/update-classe.dto';
import { ClassesService } from '@classes/services/classes.service';
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';

@Controller('classes')
export class ClassesController {
    constructor(private readonly classesService: ClassesService) {}

    @Post()
    create(@Body() createClasseDto: CreateClasseDto) {
        return this.classesService.create(createClasseDto);
    }

    @Get()
    findAll() {
        return this.classesService.findAll();
    }

    @Get(':uuid')
    findOneByUuid(@Param('uuid') uuid: string) {
        return this.classesService.findOneByUuid(uuid);
    }

    @Put()
    update(@Body() updateClasseDto: UpdateClasseDto) {
        return this.classesService.update(updateClasseDto);
    }

    @Delete(':uuid')
    remove(@Param('uuid') uuid: string) {
        return this.classesService.remove(uuid);
    }
}
