import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LocalGuard } from './local.guard';
import Veterinario from 'src/veterinarios/entities/veterinario.entity';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private readonly jwtService: JwtService) {}
    @Post('login')
    @UseGuards(LocalGuard)
    async login(@Req() request: Request) {
         // @ts-expect-error
        const veterinario = request.veterinario as Veterinario;

        const payload = {
            sub: veterinario.id,
            name: `${veterinario.veterinario}`,
            iat: new Date().getTime(),
        };

        const accessToken = await this.jwtService.signAsync(payload);

        return {
            access_token: accessToken,
        };
    }
}
