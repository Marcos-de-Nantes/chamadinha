import { Test, TestingModule } from '@nestjs/testing';
import { SituacaoMatriculaService } from '../services/situacao-matricula.service';
import { SituacaoMatriculaController } from './situacao-matricula.controller';

describe('SituacaoMatriculaController', () => {
    let controller: SituacaoMatriculaController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [SituacaoMatriculaController],
            providers: [SituacaoMatriculaService],
        }).compile();

        controller = module.get<SituacaoMatriculaController>(
            SituacaoMatriculaController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
