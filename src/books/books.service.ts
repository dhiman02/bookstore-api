import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './book.schema';
import { Model } from 'mongoose';
import { CreateBookDto } from '../users/dto/create-book.dto';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async create(bookData: CreateBookDto): Promise<Book> {
    const book = new this.bookModel(bookData);
    return book.save();
  }

  async findAll(query: any): Promise<Book[]> {
    const filter: any = {};
  
    if (query.author) filter.author = query.author;
    if (query.category) filter.category = query.category;
    if (query.rating) filter.rating = { $gte: Number(query.rating) };
    if (query.title) filter.title = { $regex: query.title, $options: 'i' };
  
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const skip = (page - 1) * limit;
  
    let sort = {};
    if (query.sort) {
      const sortField = query.sort.startsWith('-') ? query.sort.slice(1) : query.sort;
      const sortOrder = query.sort.startsWith('-') ? -1 : 1;
      sort = { [sortField]: sortOrder };
    }
  
    return this.bookModel
      .find(filter)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .exec();
  } 

  async findById(id: string): Promise<Book> {
    const book = await this.bookModel.findById(id).exec();
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }

  async update(id: string, updateData: Partial<CreateBookDto>): Promise<Book> {
    const book = await this.bookModel.findByIdAndUpdate(id, updateData, { new: true });
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }

  async delete(id: string): Promise<void> {
    const result = await this.bookModel.findByIdAndDelete(id);
    if (!result) throw new NotFoundException('Book not found');
  }
}
