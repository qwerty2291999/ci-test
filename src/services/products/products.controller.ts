import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ProductService } from './products.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Post()
  buyProduct(@Body() body: any) {
    return this.productService.buyProduct(body);
  }

  @Get()
  getProduct(@Query() id: number) {
    return this.productService.getProduct(id);
  }
}
