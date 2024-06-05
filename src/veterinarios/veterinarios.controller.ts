import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { VeterinariosService } from './veterinarios.service';
import CreateVeterinarioDto from './dto/create-veterinario.dto';
import Veterinario from './entities/veterinario.entity';
import { JwtGuard } from 'src/auth/jwt.guard';
import { IsPublic } from 'src/common/is-public.decorator';

@Controller('veterinarios')
export class VeterinariosController {
    constructor( private readonly veterinariosServices: VeterinariosService){}

    @Get()
    //Se agrega por la autorizacion
    @IsPublic()
    findAll() {
       const records = this.veterinariosServices.findAll();
       return records;
    }

    @Get(':id')
    @IsPublic()
    findOne(@Param('id') id: number) {
        return this.veterinariosServices.findOne(id);
    }

    @Post('sign-up')
    @IsPublic()
    @ApiCreatedResponse({
        description: 'Este endpoint sirve para crear nuevos veterinarios.',
        type: Veterinario,
      })

    create(@Body() body: CreateVeterinarioDto) {
        return this.veterinariosServices.create(body);
    }

    @Patch(':id')
    @UseGuards(JwtGuard)
    update(@Param('id') id: number, @Body() body) {
      return this.veterinariosServices.update(id, body);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    destroy(@Param('id') id: number){
        return this.veterinariosServices.remove(id);
    }
}
