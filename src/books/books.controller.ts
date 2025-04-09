import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './book.schema';
import { CreateBookDto } from '../users/dto/create-book.dto';
import { JwtAuthGuard } from '../auth/auth.guard';
import { UseGuards } from '@nestjs/common';

@Controller('books')
@UseGuards(JwtAuthGuard) 
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Post()
  async create(@Body() body: CreateBookDto) {
    return this.booksService.create(body);
  }

  @Get()
  async findAll(@Query() query: any) {
    return this.booksService.findAll(query);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.booksService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: Partial<Book>) {
    return this.booksService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.booksService.delete(id);
  }
}
