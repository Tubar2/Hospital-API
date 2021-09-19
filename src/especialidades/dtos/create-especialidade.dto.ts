import { IsString } from 'class-validator'
import { ManyToMany } from 'typeorm';

// import { isString } from "util";
// import { isStringObject } from "util/types";

export class EspecialidadeDto {
    @IsString()
    nome: string;

}