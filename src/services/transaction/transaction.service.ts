import { Injectable } from '@nestjs/common';
import { TransactionRepository } from './transaction.repository';

@Injectable()
export class TransactionService {
  constructor(private readonly userRepository: TransactionRepository) {}
  async onModuleInit() {}
}
