import { Module } from '@nestjs/common';
import { MedicosService } from './medicos.service';
import { MedicosController } from './medicos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medico } from './entities/medico.entity';
import { Especialidade } from '../especialidades/entities/especialidade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Medico])],
  controllers: [MedicosController],
  providers: [MedicosService],
  // exports: [TypeOrmModule],
})
export class MedicosModule {}
