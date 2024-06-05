import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { VeterinariosService } from "src/veterinarios/veterinarios.service";
import { ExtractJwt, Strategy } from 'passport-jwt';

//Duda acá
type Payload = {
    sub: number;
    name: string;
    iat: number;
  };

  @Injectable()
  export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly veterinarioService: VeterinariosService) {
      super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: process.env.JWT_SECRET,
      });
    }
    async validate(payload: Payload) {
      const veterinario = await this.veterinarioService.findOne(payload.sub);
      return veterinario;
    }
  }