/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('users')
export class User{
@PrimaryGeneratedColumn()
id: string;
@Column()
name:string;
@Column({unique: true})
email: string;
@Column()
password:string;

    
}

