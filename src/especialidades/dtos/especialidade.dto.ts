import { Expose } from 'class-transformer'
import { IsString, IsNumber } from 'class-validator'

export class EspecialidadeDto {
    
    @Expose()
    @IsString()
    nome: string;


}