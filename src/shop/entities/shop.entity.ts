import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Shop {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({type: 'text', unique: true})
    title:string

    @Column({type: 'numeric'})
    price?:number

    @Column({type: 'text'})
    description?:string

    @Column({type: 'text'})
    slug?:string

    @Column({type: 'numeric', default: 0})
    stock?:number

    @Column({type: 'text'})
    gender?:string

}