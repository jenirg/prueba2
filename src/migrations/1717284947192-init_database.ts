import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDatabase1717284947192 implements MigrationInterface {
    name = 'InitDatabase1717284947192'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "veterinarios" ("id" SERIAL NOT NULL, "veterinario" character varying(44) NOT NULL, "email" character varying NOT NULL, "password" character varying(40) NOT NULL, CONSTRAINT "PK_e3684772bab12067bdb378008bf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "mascotas" ("id" SERIAL NOT NULL, "name" character varying(44) NOT NULL, "telefono" character varying NOT NULL, CONSTRAINT "PK_26a8496b8728b2350a35f080516" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "mascotas"`);
        await queryRunner.query(`DROP TABLE "veterinarios"`);
    }

}
