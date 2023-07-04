import { IBaseRepositoryInterface } from 'src/common/repository-base-abstract/base.repsitory.interface';
import { Transaction } from './transaction.entity';

export interface IUserRepositoryInterface
  extends IBaseRepositoryInterface<Transaction> {}
