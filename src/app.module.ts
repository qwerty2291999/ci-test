import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './services/products/products.module';
import { TransactionModule } from './services/transaction/transaction.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database-1.cs38sncdguve.ap-southeast-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: '.Dumbcat2210',
      database: 'test_db',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    ProductModule,
    TransactionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
