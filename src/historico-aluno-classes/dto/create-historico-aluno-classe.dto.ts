import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateHistoricoAlunoClasseDto {
    @IsNotEmpty({ message: 'Classe não pode estar em vazio!' })
    @IsNumber()
    id_classe: number;

    @IsNotEmpty({ message: 'Aluno não pode estar em vazio!' })
    @IsNumber()
    id_aluno: number;

    @IsNotEmpty({ message: 'Situação da matrícula não pode estar em vazio!' })
    @IsNumber()
    id_situacao_matricula: number;

    @IsNotEmpty({ message: 'Número da chamada não pode estar vazio!' })
    @IsNumber()
    numero_chamada: number;

    @IsNotEmpty({ message: 'Ano letivo não pode estar vazio!' })
    @IsNumber()
    ano_letivo: number;

    @IsNotEmpty({ message: 'Status não pode estar vazio!' })
    @IsString({ message: 'Status deve ser do tipo texto!' })
    status: string;
}
