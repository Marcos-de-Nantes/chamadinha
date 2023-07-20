import { AlunosModule } from '@alunos/alunos.module';
import { CidadesModule } from '@cidades/cidades.module';
import { ClassesModule } from '@classes/classes.module';
import { EstadosModule } from '@estados/estados.module';
import { HistoricoAlunoClassesModule } from '@historicoAlunoClasses/historico-aluno-classes.module';
import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ResponsaveisModule } from '@responsaveis/responsaveis.module';
import { ResponsaveisAlunosModule } from '@responsaveisAlunos/responsaveis-alunos.module';
import { SituacaoMatriculaModule } from '@situacaoMatricula/situacao-matricula.module';
import { TurnosModule } from '@turnos/turnos.module';
import { UsuariosModule } from '@usuarios/usuarios.module';

@Module({
    imports: [
        UsuariosModule,
        AlunosModule,
        TurnosModule,
        SituacaoMatriculaModule,
        ClassesModule,
        HistoricoAlunoClassesModule,
        CidadesModule,
        EstadosModule,
        ResponsaveisModule,
        ResponsaveisAlunosModule,
    ],
    providers: [
        {
            provide: APP_PIPE,
            useClass: ValidationPipe,
        },
    ],
})
export class AppModule {}
