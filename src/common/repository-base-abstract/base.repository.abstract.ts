import { DeleteResult, InsertResult, Repository } from 'typeorm';
import { IBaseRepositoryInterface } from './base.repsitory.interface';

export abstract class BaseAbtractRepository<T>
  implements IBaseRepositoryInterface<T>
{
  private _repository: Repository<T>;
  constructor(repository: Repository<T>) {
    this._repository = repository;
  }
  find(any?: any): Promise<T[]> {
    return this._repository.find({ where: any });
  }
  findById(id: any): Promise<T> {
    return this._repository.findOne({ where: id });
  }
  insert(data: any): Promise<InsertResult> {
    return this._repository.insert(data);
  }
  delete(id: any): Promise<DeleteResult> {
    return this._repository.delete(id);
  }
  update(id: any, data: any): Promise<any> {
    return this._repository.update(id, data);
  }
  builder() {
    return this._repository.createQueryBuilder();
  }
}
