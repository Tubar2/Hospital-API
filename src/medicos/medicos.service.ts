import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMedicoDto } from './dtos/create-medico.dto';
import { FindMedicoDto } from './dtos/find-medico.dto';
import { UpdateMedicoDto } from './dtos/update-medico.dto';
import { Medico } from './entities/medico.entity';

@Injectable()
export class MedicosService {

  constructor(
    @InjectRepository(Medico)
    private medicosRepository: Repository<Medico>,
  ){}

  // This action creates a medico
  create(createMedicoDto: CreateMedicoDto) {
    console.log(createMedicoDto);
    const medico =  this.medicosRepository.create(createMedicoDto);

    return this.medicosRepository.save(medico);
  }

  // This action updates a #${id} medico
  async update(id: number, updateMedicoDto: UpdateMedicoDto) {
    const medico = await this.findOne(id);
    if(!medico){
      return null;
    }
    Object.assign(medico, updateMedicoDto);

    return this.medicosRepository.save(medico);
  }

  // This action removes a #${id} medico
  async remove(id: number) {
    const medico = await this.findOne(id);
    if(!medico){
      return null;
    }

    return this.medicosRepository.remove(medico);
  }

  // This action returns medicos based of dto params
  find(findMedicoDto: FindMedicoDto){
    return this.medicosRepository.find(findMedicoDto);
  }

  // This action returns a #${id} medico
  findOne(id: number) {
    return this.medicosRepository.findOne(id);
  }

}
