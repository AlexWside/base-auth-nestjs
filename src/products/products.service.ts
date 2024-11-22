import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './products.entity';
import { query } from 'express';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  // Create
  async create(productData: Partial<Product>): Promise<Product> {
    const product = this.productRepository.create(productData);
    return await this.productRepository.save(product);
  }

  // Read - Get all
  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  // exemplo de consulta SQL
  async getExpensiveProducts(): Promise<Product[]> {
    const query = `SELECT * FROM product WHERE price > $1`;
    return await this.productRepository.query(query, [1000]);
  }

  // Read - Get one by ID
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