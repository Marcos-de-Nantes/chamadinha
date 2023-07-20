import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateUsuarioDto {
    @IsNotEmpty({ message: 'Uuid não pode estar vazio!' })
    @IsString({ message: 'Uuid deve ser do tipo texto!' })
    uuid: string;

    @IsOptional({ message: 'Nome não pode estar vazio!' })
    @IsString({ message: 'Nome deve ser do tipo texto!' })
    nome?: string;

    @IsOptional({ message: 'Nome não pode estar vazio!' })
    @IsString({ message: 'CPF deve ser do tipo texto!' })
    cpf?: string;

    @IsOptional()
    @IsString({ message: 'Número Telefone deve ser do tipo texto!' })
    numero_telefone?: string;
}
