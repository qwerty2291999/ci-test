import { BaseAbtractRepository } from 'src/common/repository-base-abstract/base.repository.abstract';
import { Transaction } from './transaction.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { IUserRepositoryInterface } from './transaction.interface';

@Injectable()
export class TransactionRepository
  extends BaseAbtractRepository<Transaction>
  implements IUserRepositoryInterface
{
  constructor(
    @InjectRepository(Transaction)
    private readonly user: Repository<Transaction>,
  ) {
    super(user);
  }
  async insert(data: any): Promise<InsertResult> {
    return this.user.insert(data);
  }
}
