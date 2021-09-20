import { Expose } from 'class-transformer'

export class EspecialidadeDto {
    @Expose()
    nome: string;
}