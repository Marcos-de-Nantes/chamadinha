import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTurnoDto {
    @IsNotEmpty({ message: 'Uuid não pode ser vazio!' })
    @IsString({ message: 'Uuid deve ser do tipo texto!' })
    uuid: string;

    @IsNotEmpty({ message: 'Descrição não pode ser vazio!' })
    @IsString({ message: 'Descrição deve ser do tipo texto!' })
    descricao: string;
}
