import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateMascotaDto } from './dto/update-mascota.dto';
import { InjectRepository } from '@nestjs/typeorm';
import Mascota from 'src/mascotas/entities/mascota.entity';
import { Repository } from 'typeorm';
import CreateMascotaDto from './dto/create-mascota.dto';

@Injectable()
export class MascotasService {
  private records = [];
  constructor(
      @InjectRepository(Mascota)
      private readonly mascotasRepository: Repository<Mascota>,
    ) {}

    findAll() {
      return this.mascotasRepository.find();
    }

    async findOne(id: number) {
      const record = await this.mascotasRepository.findOne({
        where: { id },
      });
  
      if (!record) {
        throw new NotFoundException(`mascota #${id} not found`);
      }
  
      return record;
    }

    create(new_mascota: CreateMascotaDto) {
      if (new_mascota.name === undefined) {
      }
  
      const mascota = this.mascotasRepository.create(new_mascota);
      return this.mascotasRepository.save(mascota); // return the mascota created
  
    }

    async update(id: number, update_mascota: UpdateMascotaDto) {
      const mascota = await this.findOne(id);
      this.mascotasRepository.merge(mascota, update_mascota);
      return this.mascotasRepository.save(mascota);
    }
  
    async remove(id: number) {
      const mascota = await this.findOne(id);
      return this,this.mascotasRepository.remove(mascota);
    }
}
