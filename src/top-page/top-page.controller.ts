import {
  Controller,
  Post,
  Body,
  Param,
  HttpCode,
  Patch,
  Delete,
  Get,
} from '@nestjs/common';
import { TopPageModel } from './top-page.model';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { ConfigService } from '@nestjs/config';

@Controller('top-page')
export class TopPageController {
  constructor(private readonly configService: ConfigService) {}

  @Post('create')
  // Omit is function let exclude id
  async create(@Body() dto: Omit<TopPageModel, '_id'>) {}

  @Get(':id')
  async get(@Param('id') id: string) {
    await this.configService.get('Test');
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {}

  @Patch(':id')
  //here needs full dto
  async patch(@Param('id') id: string, @Body() dto: TopPageModel) {}

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindTopPageDto) {}
}
