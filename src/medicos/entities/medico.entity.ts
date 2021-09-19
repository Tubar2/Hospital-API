import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// Define o tipo de entidade armazenado no DB
@Entity()
export class Medico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 50})
  nome: string;

  @Column({length: 7})
  crm: string;

  // TODO: somente números
  @Column()
  tel_fixo: string;

  // TODO: somente números
  @Column()
  tel_celular: string;

  // TODO: somente números e req via XHR para a API do correio
  @Column()
  CEP: string;
  
  // TODO: duas especialidades
  @Column()
  especialidade: string;
}