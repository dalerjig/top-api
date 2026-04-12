import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ReviewDocument = HydratedDocument<ReviewModel>;

@Schema({ timestamps: true })
export class ReviewModel {
  @Prop()
  name: string;
  @Prop()
  titile: string;
  @Prop()
  description: string;
  @Prop()
  rating: number;
  @Prop()
  createdAt: Date;
}

export const ReviewSchema = SchemaFactory.createForClass(ReviewModel);
