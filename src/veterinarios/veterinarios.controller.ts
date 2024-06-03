import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { VeterinariosService } from './veterinarios.service';
import CreateVeterinarioDto from './dto/create-veterinario.dto';
import Veterinario from './entities/veterinario.entity';

@Controller('veterinarios')
export class VeterinariosController {
    constructor( private readonly veterinariosServices: VeterinariosService){}

    @Get()
    findAll() {
       const records = this.veterinariosServices.findAll();
       return records;
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.veterinariosServices.findOne(id);
    }

    @Post('sign-up')
    @ApiCreatedResponse({
        description: 'Este endpoint sirve para crear nuevos veterinarios.',
        type: Veterinario,
      })

    create(@Body() body: CreateVeterinarioDto) {
        return this.veterinariosServices.create(body);
    }

    @Patch(':id')
    //@UseGuards(JwtGuard)
    update(@Param('id') id: number, @Body() body) {
      return this.veterinariosServices.update(id, body);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    destroy(@Param('id') id: number){
        return this.veterinariosServices.remove(id);
    }
}
