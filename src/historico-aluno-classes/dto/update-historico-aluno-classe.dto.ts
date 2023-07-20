import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateHistoricoAlunoClasseDto {
    @IsNotEmpty({ message: 'Uuid não pode estar vazio!' })
    @IsString({ message: 'Uuid deve ser do tipo texto!' })
    uuid: string;

    @IsOptional()
    @IsNumber()
    id_classe: number;

    @IsOptional()
    @IsNumber()
    id_aluno: number;

    @IsOptional()
    @IsNumber()
    id_situacao_matricula: number;

    @IsOptional()
    @IsNumber()
    numero_chamada: number;

    @IsOptional()
    @IsNumber()
    ano_letivo: number;

    @IsOptional()
    @IsString({ message: 'Status deve ser do tipo texto!' })
    status: string;
}
