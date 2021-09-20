import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEspecialidadeDto } from './dtos/create-especialidade.dto';
import { FindEspecialidadeDto } from './dtos/find-especialidade.dto';
import { UpdateEspecialidadeDto } from './dtos/update-especialidade.dto';
import { Especialidade } from './entities/especialidade.entity';

@Injectable()
export class EspecialidadesService {
    constructor(
        @InjectRepository(Especialidade)
        private especialidadesRepository: Repository<Especialidade>,
    ){}
    
    // This action creates a medico
  create(createEspecialidadeDto: CreateEspecialidadeDto) {
    console.log(createEspecialidadeDto);
    const especialidade =  this.especialidadesRepository.create(createEspecialidadeDto);
    return this.especialidadesRepository.save(especialidade);
  }

  // This action updates a #${id} medico
  async update(id: number, UpdateEspecialidadeDto: UpdateEspecialidadeDto) {
    const especialidade = await this.findOne(id);
    if(!especialidade){
      return null;
    }
    Object.assign(especialidade, UpdateEspecialidadeDto);

    return this.especialidadesRepository.save(especialidade);
  }

  // This action removes a #${id} medico
  async remove(id: number) {
    const especialidade = await this.findOne(id);
    if(!especialidade){
      return null;
    }

    return this.especialidadesRepository.remove(especialidade);
  }

  // This action returns medicos based on dto params
  find(findEspecialidadeDto: FindEspecialidadeDto){
    return this.especialidadesRepository.find(findEspecialidadeDto);
  }

  // This action returns a #${id} medico
  findOne(id: number) {
    return this.especialidadesRepository.findOne(id);
  }
}
