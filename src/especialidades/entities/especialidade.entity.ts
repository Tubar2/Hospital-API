import { Medico } from 'src/medicos/entities/medico.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity()
export class Especialidade {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 20})
    nome: string;

    
    @ManyToMany(() => Medico)
    medicos: Medico[]
}