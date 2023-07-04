import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products.entity';
import { ProductRepository } from './products.repository';
import { ProductService } from './products.service';
import { ProductController } from './products.controller';
import { TransactionModule } from '../transaction/transaction.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), TransactionModule],
  providers: [ProductService, ProductRepository],
  controllers: [ProductController],
})
export class ProductModule {}
