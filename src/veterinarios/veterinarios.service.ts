import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateVeterinarioDto from './dto/create-veterinario.dto';
import UpdateVeterinarioDto from './dto/update-mascota.dto';
import Veterinario from './entities/veterinario.entity';

@Injectable()
export class VeterinariosService {
    private records = [];
    constructor(
        @InjectRepository(Veterinario)
        private readonly veterinariosRepository: Repository<Veterinario>,
      ) {}

      findAll() {
        return this.veterinariosRepository.find();
      }

      async findOne(id: number) {
        const record = await this.veterinariosRepository.findOne({
          where: { id },
        });
    
        if (!record) {
          throw new NotFoundException(`veterinario #${id} not found`);
        }
    
        return record;
      }

      async findOneByEmail(email: string): Promise<Veterinario | undefined> {
        return this.veterinariosRepository.findOne({
          where: {
            email,
          },
        });
      }

      create(new_veterinario: CreateVeterinarioDto) {
        //Duda en esta parte
        if (new_veterinario.veterinario === undefined) {
        }
        
        const veterinario = this.veterinariosRepository.create(new_veterinario);
        return this.veterinariosRepository.save(veterinario); // return the veterinario created
    
      }

      async update(id: number, update_veterinario: UpdateVeterinarioDto) {
        const veterinario = await this.findOne(id);
        this.veterinariosRepository.merge(veterinario, update_veterinario);
        return this.veterinariosRepository.save(veterinario);
      }
    
      async remove(id: number) {
        const veterinario = await this.findOne(id);
        return this,this.veterinariosRepository.remove(veterinario);
      }
    
}

