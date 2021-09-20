import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicoDto } from './create-medico.dto';
import {IsString, IsNumberString, ArrayMinSize, IsOptional} from 'class-validator'
import { FindEspecialidadeDto } from 'src/especialidades/dtos/find-especialidade.dto';
import { Especialidade } from 'src/especialidades/entities/especialidade.entity';
import { EspecialidadeDto } from 'src/especialidades/dtos/especialidade.dto';

export class UpdateMedicoDto extends PartialType(CreateMedicoDto) {
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
    @ArrayMinSize(1)
    especialidades: FindEspecialidadeDto[]
}
