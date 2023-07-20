import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateResponsaveisAlunoDto {
    @IsNotEmpty({ message: 'Aluno não pode estar vazio!' })
    @IsNumber()
    id_aluno: number;

    @IsNotEmpty({ message: 'Responsável não pode estar vazio!' })
    @IsNumber()
    id_responsavel: number;
}
