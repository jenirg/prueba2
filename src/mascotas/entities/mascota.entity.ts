import { ApiProperty } from "@nestjs/swagger";
import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity('mascotas')
class Mascota {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column({type: 'varchar', length: 44})
    @ApiProperty()
    name: string;

    //Numeros int, number y se cambia en la carpeta dto
    @Column({ type: 'varchar' })
    @ApiProperty()
    telefono: string;
}
export default Mascota;
