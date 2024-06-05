import { ApiProperty } from "@nestjs/swagger";
import Veterinario from "src/veterinarios/entities/veterinario.entity";
import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from "typeorm";

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

    @ManyToOne(() => Veterinario, (veterinario) => veterinario.mascota)
    veterinario: Veterinario;
}
export default Mascota;
