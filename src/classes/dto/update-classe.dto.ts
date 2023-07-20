import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateClasseDto {
    @IsNotEmpty({ message: 'Uuid não pode ser vazio!' })
    @IsString({ message: 'Uuid deve ser do tipo texto!' })
    uuid: string;

    @IsOptional()
    @IsNumber()
    id_turno?: number;

    @IsOptional()
    @IsString({ message: 'Descrição deve ser do tipo texto!' })
    descricao?: string;

    @IsOptional()
    @IsString({ message: 'Observação deve ser do tipo texto!' })
    observacao?: string;
}
