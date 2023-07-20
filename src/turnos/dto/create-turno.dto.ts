import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTurnoDto {
    @IsNotEmpty({ message: 'Descrição não pode ser vazio!' })
    @IsString({ message: 'Descrição deve ser do tipo texto!' })
    descricao: string;
}
