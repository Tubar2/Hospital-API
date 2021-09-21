import { Medico } from 'src/medicos/entities/medico.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity()
export class Especialidade {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    nome: string;

    
    @ManyToMany(() => Medico, (medico: Medico) => medico.especialidades, {
        eager: false
    })
    medicos: Medico[]
}