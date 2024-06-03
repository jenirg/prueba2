import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { MascotasService } from './mascotas.service';
import { UpdateMascotaDto } from './dto/update-mascota.dto';
import { ApiCreatedResponse } from '@nestjs/swagger';
import Mascota from './entities/mascota.entity';
import CreateMascotaDto from './dto/create-mascota.dto';

@Controller('mascotas')
export class MascotasController {
  constructor(private readonly mascotasService: MascotasService) {}

  @Get()
  findAll() {
	const records = this.mascotasService.findAll();
    	return records; 
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mascotasService.findOne(+id);
  }

  @Post()
  @ApiCreatedResponse({
	description: 'Este endpoint sirve para crear nuevos veterinarios.',
        type: Mascota,
	})
  
  create(@Body() body: CreateMascotaDto) {
    return this.mascotasService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body) {
    return this.mascotasService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  destroy(@Param('id') id: number) {
    return this.mascotasService.remove(id);
  }
}