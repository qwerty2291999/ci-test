import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './transaction.entity';
import { TransactionRepository } from './transaction.repository';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction])],
  providers: [TransactionRepository, TransactionService],
  controllers: [TransactionController],
  exports: [TransactionRepository],
})
export class TransactionModule {}
