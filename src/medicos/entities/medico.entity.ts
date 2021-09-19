import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Especialidade } from '../../especialidades/entities/especialidade.entity';

// Define o tipo de entidade armazenado no DB
@Entity()
export class Medico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 120})
  nome: string;

  @Column({length: 7})
  crm: string;

  @Column({length: 11})
  cep: string;

  @Column({length: 20})
  tel_fixo: string;

  @Column({length: 20})
  tel_celular: string;
  

  @ManyToMany(() => Especialidade)
  @JoinTable()
  especialidades: Especialidade[]
}