import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateEspecialidadeDto } from './dtos/create-especialidade.dto';
import { FindEspecialidadeDto } from './dtos/find-especialidade.dto';
import { UpdateEspecialidadeDto } from './dtos/update-especialidade.dto';
import { EspecialidadesService } from './especialidades.service';

@Controller('especialidades')
export class EspecialidadesController {
    constructor(private readonly especialidadesService: EspecialidadesService) {}
    
    @Post()
    async create(@Body() createEspecialidadeDto: CreateEspecialidadeDto) {
        const success = await this.especialidadesService.create(createEspecialidadeDto);
        if(success === null) {
            throw new BadRequestException("Especialidade já existe no BD");
        }
        return success;
    }

    @Get()
    find(@Query() findEspecialidadeDto: FindEspecialidadeDto){
        console.log(findEspecialidadeDto);
        return this.especialidadesService.find(findEspecialidadeDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const especialidade = await this.especialidadesService.findOne(+id);
        if(!especialidade){
        throw new NotFoundException("Especialidade not found")
        }
        return especialidade;
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateEspecialidadeDto: UpdateEspecialidadeDto) {
        const especialidade = await this.especialidadesService.update(+id, updateEspecialidadeDto)
        if(!especialidade){
        throw new NotFoundException("Especialidade not found")
        }
        return especialidade;
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        const especialidade = await this.especialidadesService.remove(+id);
        if(!especialidade){
        throw new NotFoundException("Especialidade not found")
        }
        return especialidade;
    }

}
