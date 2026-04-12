import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<ProductModel>;

class ProductCharasteristic {
  @Prop()
  name: string;
  @Prop()
  value: string;
}
@Schema({ timestamps: true })
export class ProductModel {
  //_id: string; dont need this cause of mongoose
  @Prop()
  image: string;
  @Prop()
  title: string;
  @Prop()
  price: number;
  @Prop()
  oldPrice: number;
  @Prop()
  credit: number;
  @Prop()
  calculatedRating: number;
  @Prop()
  description: string;
  @Prop()
  advantages: string;
  @Prop()
  disAdvantages: string;
  @Prop({ type: [String] })
  categories: string[];
  @Prop({ type: [String] })
  tags: string[];
  @Prop({ type: [ProductCharasteristic], _id: true }) //!
  characteristics: ProductCharasteristic[];
}

export const ProductSchema = SchemaFactory.createForClass(ProductModel);
