import { ApiProperty } from "@nestjs/swagger";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('veterinarios')
class Veterinario{
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column({type: 'varchar', length: 44})
    @ApiProperty()
    veterinario: string;

    @Column({ type: 'varchar' })
    @ApiProperty()
    email: string;

    @Column({type: 'varchar', length: 40})
    @ApiProperty()
    password: string;

}
export default Veterinario;