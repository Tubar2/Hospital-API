import {IsString, IsNumberString, ArrayMinSize, IsInstance} from 'class-validator'
import { FindEspecialidadeDto } from 'src/especialidades/dtos/find-especialidade.dto';


export class CreateMedicoDto {
    @IsString()
    nome: string;

    // Somente números
    @IsNumberString({no_symbols: true})
    crm: string;

    // Somente números
    @IsNumberString({no_symbols: true})
    cep: string;

    @IsNumberString({no_symbols: false})
    tel_fixo: string;

    @IsNumberString()
    tel_celular: string;

    @ArrayMinSize(2)
    especialidades: FindEspecialidadeDto[]
}
