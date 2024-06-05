import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VeterinariosController } from './veterinarios/veterinarios.controller';
import { VeterinariosService } from './veterinarios/veterinarios.service';
import { MascotasController } from './mascotas/mascotas.controller';
import { MascotasService } from './mascotas/mascotas.service';
import { VeterinariosModule } from './veterinarios/veterinarios.module';
import { MascotasModule } from './mascotas/mascotas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from '@hapi/joi';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    
    ConfigModule.forRoot({
    envFilePath: '.env.local',
    validationSchema: Joi.object({
      DB_HOST: Joi.string().required(),
      DB_PORT: Joi.number().default(5432),
      DB_NAME: Joi.string().required(),
      DB_USER: Joi.string().required(),
      DB_PASS: Joi.string().required(),
      JWT_SECRET: Joi.string().required(),
    }),
  }),

  TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    autoLoadEntities: true,
    synchronize: false, 
  }),
    VeterinariosModule, 
    MascotasModule, AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
