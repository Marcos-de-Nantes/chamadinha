import { Test, TestingModule } from '@nestjs/testing';
import { HistoricoAlunoClassesService } from './historico-aluno-classes.service';

describe('HistoricoAlunoClassesService', () => {
    let service: HistoricoAlunoClassesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [HistoricoAlunoClassesService],
        }).compile();

        service = module.get<HistoricoAlunoClassesService>(
            HistoricoAlunoClassesService,
        );
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
