import { ApiProperty } from "@nestjs/swagger";
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import Mascota from "src/mascotas/entities/mascota.entity";

@Entity('veterinarios')
class Veterinario {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column({ type: 'varchar', length: 44 })
    @ApiProperty()
    veterinario: string;

    @Column({ type: 'varchar' })
    @ApiProperty()
    email: string;

    @Column({ type: 'varchar', length: 40 })
    //@ApiProperty() DUDA
    password: string;

   /* @BeforeInsert()
    async hashPassword() {
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(this.password, saltOrRounds);
        this.password = hash;
    }*/

    @OneToMany(() => Mascota, (mascota) => mascota.veterinario)
    mascota: Mascota[];
}
export default Veterinario;