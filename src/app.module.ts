import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Medico } from './medicos/entities/medico.entity';
import { MedicosModule } from './medicos/medicos.module';

@Module({
  imports: [
    MedicosModule,
    TypeOrmModule.forRoot({ // TODO: Can be passed as a 'ormconfig.json' in root project folder
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rootpass',
      database: 'medicos',
      entities: [Medico],
      synchronize: true,  // TODO: Shouldn't be used in production
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection){}
}
