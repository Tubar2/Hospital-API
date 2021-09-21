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

  @Column({length: 25})
  tel_fixo: string;

  @Column({length: 25})
  tel_celular: string;
  

  @ManyToMany(() => Especialidade, (especialidade: Especialidade) => especialidade.medicos, {
    onUpdate: 'CASCADE',
    eager: true
  })
  @JoinTable({
    name: "Medico_has_Especialidades",
  })
  public especialidades: Especialidade[];
}