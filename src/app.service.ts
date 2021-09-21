import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Especialidade } from './especialidades/entities/especialidade.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Especialidade) 
    private espRepo: Repository<Especialidade>,
  ) {}
  private seeds: string[] = [
    "Alergologia",
    "Angiologia",
    "Buco Maxilo",
    "Cardiologia clínca",
    "Cardiologia infantil",
    "Cirurgia cabeça e pescoço",
    "Cirurgia cardíaca",
    "Cirurgia de tórax",
  ];

  async seedDB() {
    for (let i = 0; i < this.seeds.length; i++) {
      const inRepo = await this.espRepo.find( {nome: this.seeds[i]} );

      if(inRepo.length == 0){
        const esp = this.espRepo.create({nome: this.seeds[i]});
        await this.espRepo.save(esp);
      }
      
    }


    return 'Finished seeding!';
  }

  hello(){
    return "Hospital API"
  }
}
