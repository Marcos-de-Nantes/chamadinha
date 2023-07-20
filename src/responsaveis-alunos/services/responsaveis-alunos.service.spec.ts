import { Test, TestingModule } from '@nestjs/testing';
import { ResponsaveisAlunosService } from './responsaveis-alunos.service';

describe('ResponsaveisAlunosService', () => {
    let service: ResponsaveisAlunosService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ResponsaveisAlunosService],
        }).compile();

        service = module.get<ResponsaveisAlunosService>(
            ResponsaveisAlunosService,
        );
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
