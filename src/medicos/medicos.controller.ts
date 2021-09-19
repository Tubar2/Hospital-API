import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, Query } from '@nestjs/common';
import { MedicosService } from './medicos.service';
import { CreateMedicoDto } from './dtos/create-medico.dto';
import { UpdateMedicoDto } from './dtos/update-medico.dto';
import { FindMedicoDto } from './dtos/find-medico.dto';

@Controller('medicos')
export class MedicosController {
  constructor(private readonly medicosService: MedicosService) {}

  @Post()
  create(@Body() createMedicoDto: CreateMedicoDto) {
    return this.medicosService.create(createMedicoDto);
  }

  @Get()
  find(@Query() findMedicoDto: FindMedicoDto){
    console.log(findMedicoDto);
    return this.medicosService.find(findMedicoDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const medico = await this.medicosService.findOne(+id);
    if(!medico){
      throw new NotFoundException("Médico not found")
    }
    return medico;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMedicoDto: UpdateMedicoDto) {
    const medico = await this.medicosService.update(+id, updateMedicoDto)
    if(!medico){
      throw new NotFoundException("Médico not found")
    }
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
