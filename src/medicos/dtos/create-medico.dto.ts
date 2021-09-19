import {IsString, IsNumberString, ArrayMinSize} from 'class-validator'
import { EspecialidadeDto } from '../../especialidades/dtos/create-especialidade.dto';


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

    // // duas especialidades
    // especialidades: string[];
    @ArrayMinSize(2) 
    especialidades: EspecialidadeDto[]
}
