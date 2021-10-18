import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("M_USER")
export class LoginEntity {
    @PrimaryGeneratedColumn()
    ID: string;

    @Column()
    EMAIL: string;

    @Column()
    PASSWORD: string;
}