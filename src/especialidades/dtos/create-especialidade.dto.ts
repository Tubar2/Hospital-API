import { IsString } from 'class-validator'

export class CreateEspecialidadeDto {
    @IsString()
    nome: string;

}