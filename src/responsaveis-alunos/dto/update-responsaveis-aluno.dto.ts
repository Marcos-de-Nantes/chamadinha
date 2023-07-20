import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateResponsaveisAlunoDto {
    @IsNotEmpty({ message: 'Aluno não pode estar vazio!' })
    @IsString({ message: 'Uuid deve ser do tipo texto!' })
    uuid: string;

    @IsOptional()
    @IsNumber()
    id_aluno?: number;

    @IsOptional()
    @IsNumber()
    id_responsavel?: number;
}
