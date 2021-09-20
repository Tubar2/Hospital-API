import { Expose } from 'class-transformer'
import { EspecialidadeDto } from 'src/especialidades/dtos/especialidade.dto';
// import { Especialidade } from 'src/especialidades/entities/especialidade.entity';

export class MedicoDto {
    @Expose()
    nome: string;

    @Expose()
    especialidades: EspecialidadeDto[];

    // @Expose()
    // crm: string;

    // @Expose()
    // cep: string;

    // @Expose()
    // tel_fixo: string;

    // @Expose()
    // tel_celular: string;
}