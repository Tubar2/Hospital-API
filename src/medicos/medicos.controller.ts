import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, Query, UseInterceptors, ClassSerializerInterceptor, InternalServerErrorException } from '@nestjs/common';
import { MedicosService } from './medicos.service';
import { CreateMedicoDto } from './dtos/create-medico.dto';
import { UpdateMedicoDto } from './dtos/update-medico.dto';
import { FindMedicoDto } from './dtos/find-medico.dto';
import { CorreiosService } from './correios.service';
import { EspecialidadesService } from 'src/especialidades/especialidades.service';
import { Especialidade } from 'src/especialidades/entities/especialidade.entity';


@Controller('medicos')
export class MedicosController {
  constructor(
    private readonly medicosService: MedicosService,
    private readonly especialidadeService: EspecialidadesService,
    private  correiosService: CorreiosService
    ) {}

  @Post()
  async create(@Body() createMedicoDto: CreateMedicoDto) {
    var especialidades: Especialidade[] = []
    for (let i = 0; i < createMedicoDto.especialidades.length; i++) {
      const [especialidade] = await this.especialidadeService.find(createMedicoDto.especialidades[i]);
      if(!especialidade){
      } else {
        especialidades.push(especialidade);
      }
    }
    if(especialidades.length < 2) throw new NotFoundException("Especialidades não encontradas")
    const medico = await this.medicosService.create(createMedicoDto, especialidades);
    if(!medico){
      throw new InternalServerErrorException("Error Creating medico")
    }

    const cep = this.correiosService.getDados(medico.cep)
    return  cep;
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async find(@Query() findMedicoDto: FindMedicoDto){
    const medicos = await this.medicosService.find(findMedicoDto);
    return medicos;
  }


  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const medico = await this.medicosService.findOne(+id);
    if(!medico){
      throw new NotFoundException("Médico not found");
    }
  
    return medico;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMedicoDto: UpdateMedicoDto) {
    const medico = await this.medicosService.update(+id, updateMedicoDto)
    // if(medico instanceof NotFoundException){
    //   throw medico;
    // }
    return medico;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const medico = await this.medicosService.remove(+id);
    if(!medico){
      throw new NotFoundException("Médico not found")
    }
    return medico;
  }
}
