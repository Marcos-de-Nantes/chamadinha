import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAlunoDto {
    @IsNotEmpty({ message: 'Nome não pode estar vazio!' })
    @IsString({ message: 'Nome deve ser do tipo texto!' })
    nome: string;

    @IsNotEmpty({ message: 'Sexo não pode estar vazio!' })
    @IsString({
        message: 'Sexo deve estar entre: MASCULINO, FEMININO ou OUTRO',
    })
    sexo: 'MASCULINO' | 'FEMININO' | 'OUTRO';

    @IsNotEmpty({ message: 'CGM não pode estar vazio!' })
    @IsString({ message: 'CGM deve ser do tipo texto!' })
    cgm: string;

    @IsNotEmpty({ message: 'Número de telefone não pode estar vazio!' })
    @IsString({ message: 'Número de telefone deve ser do tipo texto!' })
    numero_telefone: string;

    @IsNotEmpty({ message: 'Data de nascimento não pode estar vazio!' })
    data_nascimento: Date;

    @IsNotEmpty({ message: 'Data de matrícula não pode estar vazio!' })
    data_matricula: Date;
}
