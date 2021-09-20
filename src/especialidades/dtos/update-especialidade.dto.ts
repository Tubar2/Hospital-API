import { PartialType } from '@nestjs/mapped-types';
import {IsString, IsOptional} from 'class-validator'
import { CreateEspecialidadeDto } from './create-especialidade.dto';


export class UpdateEspecialidadeDto extends PartialType(CreateEspecialidadeDto) {
    @IsString()
    @IsOptional()
    nome: string;

}
