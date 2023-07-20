import { Test, TestingModule } from '@nestjs/testing';
import { HistoricoAlunoClassesController } from './historico-aluno-classes.controller';
import { HistoricoAlunoClassesService } from '../historico-aluno-classes.service';

describe('HistoricoAlunoClassesController', () => {
    let controller: HistoricoAlunoClassesController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [HistoricoAlunoClassesController],
            providers: [HistoricoAlunoClassesService],
        }).compile();

        controller = module.get<HistoricoAlunoClassesController>(
            HistoricoAlunoClassesController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
