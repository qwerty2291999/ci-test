import { BaseAbtractRepository } from 'src/common/repository-base-abstract/base.repository.abstract';
import { Product } from './products.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { IUserRepositoryInterface } from './products.interface';
import { TransactionRepository } from '../transaction/transaction.repository';

@Injectable()
export class ProductRepository
  extends BaseAbtractRepository<Product>
  implements IUserRepositoryInterface
{
  constructor(
    @InjectRepository(Product) private readonly product: Repository<Product>,
    private readonly transaction: TransactionRepository,
  ) {
    super(product);
  }
  async insert(data: any): Promise<any> {
    const findOwn = await this.transaction.find({
      productId: data.productId,
      phoneNumber: data.phoneNumber,
    });
    const findIphone = await this.find({ id: data.productId });
    const startDate: any = findIphone[0].startDate;
    const endDate: any = findIphone[0].endDate;
    if (startDate - Date.now() > 0) {
      return { success: false, message: 'Sale is not started yet.' };
    }
    if (endDate - Date.now() < 0) {
      return { success: false, message: 'Sale is ended.' };
    }
    if (findOwn.length) {
      return { success: false, message: 'One IPhone per person.' };
    }
    if (findIphone[0].limit) {
      await this.update(
        { id: data.productId },
        { limit: findIphone[0].limit - 1 },
      );
      await this.transaction.insert({
        productId: data.productId,
        phoneNumber: data.phoneNumber,
      });
      return { success: true, message: 'Success.' };
    } else {
      return { success: false, message: 'Out of stocks.' };
    }
  }
}
