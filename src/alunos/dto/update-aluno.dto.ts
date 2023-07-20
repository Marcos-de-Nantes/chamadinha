import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateAlunoDto {
    @IsNotEmpty({ message: 'Uuid não pode estar vazio!' })
    @IsString({ message: 'Uuid deve ser do tipo texto!' })
    uuid: string;

    @IsOptional()
    @IsString({ message: 'Nome deve ser do tipo texto!' })
    nome?: string;

    @IsOptional()
    @IsString({
        message: 'Sexo deve estar entre: MASCULINO, FEMININO ou OUTRO',
    })
    sexo?: 'MASCULINO' | 'FEMININO' | 'OUTRO';

    @IsOptional()
    @IsString({ message: 'CGM deve ser do tipo texto!' })
    cgm?: string;

    @IsOptional()
    @IsString({ message: 'Número de telefone deve ser do tipo texto!' })
    numero_telefone?: string;

    @IsOptional()
    data_nascimento?: Date;

    @IsOptional()
    data_matricula?: Date;
}
