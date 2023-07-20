import { Test, TestingModule } from '@nestjs/testing';
import { ResponsaveisAlunosController } from './responsaveis-alunos.controller';
import { ResponsaveisAlunosService } from '../responsaveis-alunos.service';

describe('ResponsaveisAlunosController', () => {
    let controller: ResponsaveisAlunosController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ResponsaveisAlunosController],
            providers: [ResponsaveisAlunosService],
        }).compile();

        controller = module.get<ResponsaveisAlunosController>(
            ResponsaveisAlunosController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
