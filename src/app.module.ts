import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Especialidade } from './especialidades/entities/especialidade.entity';
import { Medico } from './medicos/entities/medico.entity';
import { MedicosModule } from './medicos/medicos.module';
import { EspecialidadesModule } from './especialidades/especialidades.module';
import { SeedEspecialidade1632230128274 } from './db/migrations/1632230128274-SeedEspecialidade';
import { HospitalMigrations1632230095362 } from './db/migrations/1632230095362-HospitalMigrations';
// import { SeedEspecialidade1632183078079 } from './db/migrations/1632183078079-SeedEspecialidade';
// import { HospitalMigrations1632228304442 } from './db/migrations/1632228304442-HospitalMigrations';


@Module({
  imports: [
    MedicosModule,
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
      port: 3306,
      username: "root",
      password: "rootpass",
      database: "medicos",
      entities: ["dist/**/*.entity.js"],
      // migrationsRun: true,
      migrationsRun: process.env.NODE_ENV == "production",
      synchronize: process.env.NODE_ENV != "production",
      host: process.env.DB_HOST,
      // host: "localhost",
      type: 'mysql',
      cli: {
        migrationsDir: "src/db/migrations",
      },
      migrations: [
        "dist/db/migrations/*.js",
        SeedEspecialidade1632230128274,
        HospitalMigrations1632230095362
      ]
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
