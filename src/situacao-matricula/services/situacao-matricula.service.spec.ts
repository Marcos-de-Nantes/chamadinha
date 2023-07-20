import { Test, TestingModule } from '@nestjs/testing';
import { SituacaoMatriculaService } from './situacao-matricula.service';

describe('SituacaoMatriculaService', () => {
    let service: SituacaoMatriculaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [SituacaoMatriculaService],
        }).compile();

        service = module.get<SituacaoMatriculaService>(
            SituacaoMatriculaService,
        );
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
