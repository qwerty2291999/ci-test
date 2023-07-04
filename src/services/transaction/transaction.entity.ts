import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '../products/products.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Product, (product) => product.id)
  @JoinColumn({ name: 'productId' })
  productId: number;

  @Column()
  phoneNumber: number;
}
