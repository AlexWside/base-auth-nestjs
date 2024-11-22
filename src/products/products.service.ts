import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}


  async create(productData: Partial<Product>): Promise<Product> {
    const product = this.productRepository.create(productData);
    return await this.productRepository.save(product);
  }


  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }


  async getExpensiveProducts(): Promise<Product[]> {
    const query = `SELECT * FROM product WHERE price > $1`;
    return await this.productRepository.query(query, [1000]);
  }


  async findOne(id: number): Promise<Product> {
    return await this.productRepository.findOneBy({ id });
  }

  // Update
  async update(id: number, productData: Partial<Product>): Promise<Product> {
    await this.productRepository.update(id, productData);
    return this.findOne(id); // Retorna o produto atualizado
  }

  // Delete
  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}