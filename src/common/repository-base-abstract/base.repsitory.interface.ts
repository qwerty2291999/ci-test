import { DeleteResult, InsertResult } from 'typeorm';

export interface IBaseRepositoryInterface<T> {
  find(id: any): Promise<T[]>;

  findById(id: any): Promise<T>;

  insert(data: any): Promise<InsertResult>;

  delete(id: any): Promise<DeleteResult>;

  update(id: any, data: any): Promise<any>;
}
