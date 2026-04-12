import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocemnt = HydratedDocument<User>;
@Schema()
export class User {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop([String])
  image: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
