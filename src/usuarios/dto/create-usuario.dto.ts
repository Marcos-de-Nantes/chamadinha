import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUsuarioDto {
    @IsNotEmpty({ message: 'Nome não pode estar vazio!' })
    @IsString({ message: 'Nome deve ser do tipo texto!' })
    nome: string;

    @IsNotEmpty({ message: 'CPF não pode ser vazio!' })
    @IsString({ message: 'CPF deve ser do tipo texto!' })
    cpf: string;

    @IsNotEmpty({ message: 'Email não pode ser vazio!' })
    @IsEmail({ message: 'Formato de email inválido!' })
    email: string;

    @IsNotEmpty({ message: 'Número de telefone não pode ser vazio!' })
    @IsString({ message: 'Número de telefone deve ser do tipo texto!' })
    numero_telefone: string;

    @IsNotEmpty({ message: 'Senha não pode estar vazio!' })
    senha: string;
}
