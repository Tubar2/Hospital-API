import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Especialidade } from './especialidades/entities/especialidade.entity';
import { Medico } from './medicos/entities/medico.entity';
import { MedicosModule } from './medicos/medicos.module';
import { EspecialidadesModule } from './especialidades/especialidades.module';

@Module({
  imports: [
    MedicosModule,
    TypeOrmModule.forRoot({
      autoLoadEntities: true
    }),
    TypeOrmModule.forFeature([Medico, Especialidade]),
    EspecialidadesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection){}
}
