import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { CreateResponsaveisDto } from '@responsaveis/dto/create-responsaveis.dto';
import { UpdateResponsaveisDto } from '@responsaveis/dto/update-responsaveis.dto';
import { ResponsaveisService } from '@responsaveis/services/responsaveis.service';

@Controller('responsaveis')
export class ResponsaveisController {
    constructor(private readonly responsaveisService: ResponsaveisService) {}

    @Post()
    create(@Body() createResponsaveiDto: CreateResponsaveisDto) {
        return this.responsaveisService.create(createResponsaveiDto);
    }

    @Get()
    findAll() {
        return this.responsaveisService.findAll();
    }

    @Get(':uuid')
    findOneByUuid(@Param('uuid') uuid: string) {
        return this.responsaveisService.findOneByUuid(uuid);
    }

    @Put()
    update(@Body() updateResponsaveisDto: UpdateResponsaveisDto) {
        return this.responsaveisService.update(updateResponsaveisDto);
    }

    @Delete(':uuid')
    remove(@Param('uuid') uuid: string) {
        return this.responsaveisService.remove(uuid);
    }
}
