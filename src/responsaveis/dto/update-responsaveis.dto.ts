import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateResponsaveisDto {
    @IsNotEmpty({ message: 'Uuid não pode ser vazio!' })
    @IsString({ message: 'Uuid deve ser do tipo texto!' })
    uuid: string;

    @IsOptional()
    @IsNumber()
    id_cidade?: number;

    @IsOptional()
    @IsString({ message: 'Nome deve ser do tipo texto!' })
    nome?: string;

    @IsOptional()
    @IsString({ message: 'CPF deve ser do tipo texto!' })
    cpf?: string;

    @IsOptional()
    @IsString({ message: 'Rua deve ser do tipo texto!' })
    rua?: string;

    @IsOptional()
    @IsString({ message: 'Bairro deve ser do tipo texto!' })
    bairro?: string;

    @IsOptional()
    @IsString({ message: 'Número da Rua deve ser do tipo texto!' })
    numero_rua?: string;

    @IsOptional()
    @IsString({ message: 'CEP deve ser do tipo texto!' })
    cep?: string;

    @IsOptional()
    @IsString({ message: 'Referência deve ser do tipo texto!' })
    referencia?: string;

    @IsOptional()
    @IsString({ message: 'Número de Telefone deve ser do tipo texto!' })
    numero_telefone?: string;
}
