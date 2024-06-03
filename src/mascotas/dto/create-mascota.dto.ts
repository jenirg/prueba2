import { IsString, MinLength, MaxLength, IsEmail } from "class-validator";

export default class CreateMascotaDto {
    @IsString()
    @MinLength(2)
    @MaxLength(44)
    name: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    telefono: string;
}
