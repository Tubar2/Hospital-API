import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicoDto } from './create-medico.dto';
import {IsString, IsNumberString, IsOptional, IsNumber} from 'class-validator'
import { EspecialidadeDto } from '../../especialidades/dtos/create-especialidade.dto';

export class FindMedicoDto extends PartialType(CreateMedicoDto) {    
    @IsString()
    @IsOptional()
    nome: string;

    // Somente números
    @IsNumberString({no_symbols: true})
    @IsOptional()
    crm: string;

    // Somente números
    @IsNumberString({no_symbols: true})
    @IsOptional()
    cep: string;

    @IsNumberString({no_symbols: false})
    @IsOptional()
    tel_fixo: string;

    @IsNumberString()
    @IsOptional()
    tel_celular: string;

    @IsOptional()
    especialidades: EspecialidadeDto[]
    // especialidades: string[];

}
