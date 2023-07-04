import { IBaseRepositoryInterface } from 'src/common/repository-base-abstract/base.repsitory.interface';
import { Product } from './products.entity';

export interface IUserRepositoryInterface
  extends IBaseRepositoryInterface<Product> {}
