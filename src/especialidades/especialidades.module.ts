import { Module } from '@nestjs/common';
import { EspecialidadesService } from './especialidades.service';
import { EspecialidadesController } from './especialidades.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Especialidade } from './entities/especialidade.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Especialidade])],
  providers: [EspecialidadesService],
  controllers: [EspecialidadesController]
})
export class EspecialidadesModule {}
