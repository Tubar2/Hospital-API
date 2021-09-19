import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { Medico } from './entities/medico.entity';

@Injectable()
export class MedicosService {

  constructor(
    @InjectRepository(Medico)
    private medicosRepository: Repository<Medico>,
  ){}

  create(createMedicoDto: CreateMedicoDto) {
    const medico = this.medicosRepository.create(createMedicoDto);
    console.log(medico);
    return this.medicosRepository.save(medico);
    // TODO: Create user
    // return 'This action adds a new medico';
  }
  update(id: number, updateMedicoDto: UpdateMedicoDto) {
    this.medicosRepository.save(updateMedicoDto);
    // TODO: Update user
    return `This action updates a #${id} medico`;
  }

  // This action returns all medicos
  findAll() {
    return this.medicosRepository.find();
  }

  // This action returns a #${id} medico
  findOne(id: number) {
    return this.medicosRepository.findOne(id);
  }


  // This action removes a #${id} medico
  async remove(id: number) {
    await this.medicosRepository.delete(id);
  }
}
