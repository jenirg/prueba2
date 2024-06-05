import { IsString, MinLength, MaxLength, IsEmail } from "class-validator";
import { BeforeInsert } from "typeorm";
//Se agrega manualmente
import * as bcrypt from 'bcrypt';

export default class CreateVeterinarioDto {
    @IsString()
    @MinLength(2)
    @MaxLength(44)
    veterinario: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    //Se recomiend que tenga un minimo de 10 caracteres
    @MinLength(10)
    @MaxLength(40)
    password: string;

}