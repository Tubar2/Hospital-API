import { Module } from '@nestjs/common';
import { MedicosService } from './medicos.service';
import { MedicosController } from './medicos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medico } from './entities/medico.entity';
import { HttpModule } from '@nestjs/axios';
import { CorreiosService } from './correios.service';
import { EspecialidadesService } from 'src/especialidades/especialidades.service';
import { Especialidade } from 'src/especialidades/entities/especialidade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Medico]), TypeOrmModule.forFeature([Especialidade]), HttpModule],
  controllers: [MedicosController],
  providers: [MedicosService, CorreiosService, EspecialidadesService],
  // exports: [TypeOrmModule],
})
export class MedicosModule {}
