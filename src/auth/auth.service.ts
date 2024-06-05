import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import Veterinario from 'src/veterinarios/entities/veterinario.entity';
import { VeterinariosService } from 'src/veterinarios/veterinarios.service';

@Injectable()
export class AuthService {
    constructor(private readonly veterinarioService: VeterinariosService) {}
    async singIn(email: string, password: string): Promise<Veterinario> {
      const veterinario = await this.veterinarioService.findOneByEmail(email);
  
      if (veterinario === undefined) {
        throw new UnauthorizedException();
      }
  
      const isMatch = await bcrypt.compare(password, veterinario.password);
  
      if (!isMatch) {
        throw new UnauthorizedException();
      }
  
      return veterinario;
    }
}
