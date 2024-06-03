import { DataSource } from 'typeorm';

export const dataSource: DataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'url',
  password: 'url.2024',
  database: 'consultorio2024',
  synchronize: false,
  entities: ['src/**/*.entity{.ts, .js}'],
  migrations: ['./src/migrations/*.ts'],
});