import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateResponsaveisDto {
    @IsNotEmpty({ message: 'Cidade não pode estar vazio!' })
    @IsNumber()
    id_cidade: number;

    @IsNotEmpty({ message: 'Nome não pode estar vazio!' })
    @IsString({ message: 'Nome deve ser do tipo texto!' })
    nome: string;

    @IsNotEmpty({ message: 'CPF não pode estar vazio!' })
    @IsString({ message: 'CPF deve ser do tipo texto!' })
    cpf: string;

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

    @IsNotEmpty({ message: 'Número de Telefone não pode estar vazio!' })
    @IsString({ message: 'Número de Telefone deve ser do tipo texto!' })
    numero_telefone: string;
}
