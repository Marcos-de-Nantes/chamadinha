import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateClasseDto {
    @IsNotEmpty({ message: 'Descrição não pode ser vazio!' })
    @IsNumber()
    id_turno: number;

    @IsNotEmpty({ message: 'Descrição não pode ser vazio!' })
    @IsString({ message: 'Descrição deve ser do tipo texto!' })
    descricao: string;

    @IsOptional()
    @IsString({ message: 'Observação deve ser do tipo texto!' })
    observacao?: string;
}
