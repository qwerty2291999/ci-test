import { Injectable } from '@nestjs/common';
import { ProductRepository } from './products.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}
  async onModuleInit() {
    const findIPhone = await this.productRepository.find({ name: 'Iphone 15' });
    if (!findIPhone.length) {
      const startDate = new Date(Date.UTC(2023, 6, 3, 2));
      const endDate = new Date(Date.UTC(2023, 6, 3, 4));
      this.productRepository.insert({
        name: 'Iphone 15',
        startDate,
        endDate,
        price: 1000,
        limit: 20,
      });
    }
  }

  async buyProduct(body: any) {
    return this.productRepository.insert(body);
  }

  async getProduct(id: any) {
    return this.productRepository.findById(id);
  }
}
