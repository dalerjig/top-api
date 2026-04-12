import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from '../product/product.module';
import { ReviewSchema } from './review.model';

@Module({
  controllers: [ReviewController],
  imports: [
    MongooseModule.forFeature([
      { name: ProductModule.name, schema: ReviewSchema },
    ]),
  ],
})
export class ReviewModule {}
