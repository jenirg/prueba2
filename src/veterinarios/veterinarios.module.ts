import { Module } from '@nestjs/common';
import Veterinario from './entities/veterinario.entity';
import { VeterinariosController } from './veterinarios.controller';
import { VeterinariosService } from './veterinarios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from 'src/auth/jwt.guard';

@Module({

    imports: [TypeOrmModule.forFeature([Veterinario])],
    controllers: [VeterinariosController],
    providers: [
        VeterinariosService,
        {
            provide: APP_GUARD,
            useClass: JwtGuard,
        },
    ],
    exports: [VeterinariosService],
})

export class VeterinariosModule { }