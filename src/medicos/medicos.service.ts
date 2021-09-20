import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Especialidade } from 'src/especialidades/entities/especialidade.entity';
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
    @InjectRepository(Especialidade)
    private especialidadesRepository: Repository<Especialidade>,
  ){}

  // This action creates a medico
  create(createMedicoDto: CreateMedicoDto, especialidades: Especialidade[]) {
    // console.log(createMedicoDto);
    const medico =  this.medicosRepository.create(createMedicoDto);
    medico.especialidades = especialidades;

    return this.medicosRepository.save(medico);
  }

  // This action updates a #${id} medico
  async update(id: number, updateMedicoDto: UpdateMedicoDto) {
    var newEspecialidades: Especialidade[] = []
    var tempEspecialidades: Especialidade[] = []

    const medico = await this.medicosRepository.findOne(id, {relations: ["especialidades"]});
    if(!medico){
      return new NotFoundException("Médico not found");
    }

    for (let i = 0; i < updateMedicoDto.especialidades.length; i++) {
      const [found] = await this.especialidadesRepository.find(updateMedicoDto.especialidades[i]);
      if(!found){
        return new NotFoundException("Especialidade not found");
      }
      if( !medico.especialidades.find(el => el.nome === found.nome)){
        newEspecialidades.push(found);
      }
      
    }
    if(newEspecialidades.length == 0){
      return new NotFoundException("Nenhuma especialidade nova foi inserida");
    }
    tempEspecialidades = [...medico.especialidades, ...newEspecialidades];

    Object.assign(medico, updateMedicoDto);
    medico.especialidades = tempEspecialidades;
    this.medicosRepository.delete(id);

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

  // This action returns medicos based on dto params
  find(findMedicoDto: FindMedicoDto){
    return this.medicosRepository.find(findMedicoDto);
  }

  // This action returns a #${id} medico
  findOne(id: number) {
    return this.medicosRepository.findOne(id, {
      relations: ['especialidades']
    });
  }

}
