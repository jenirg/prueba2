import { Module } from '@nestjs/common';
import Veterinario from './entities/veterinario.entity';
import { VeterinariosController } from './veterinarios.controller';
import { VeterinariosService } from './veterinarios.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  
    imports:[TypeOrmModule.forFeature([Veterinario])],
    controllers: [VeterinariosController],
    providers: [VeterinariosService],
    exports: [VeterinariosService],
})

export class VeterinariosModule {}