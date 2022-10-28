import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  fullName: string;

  @Prop()
  address: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  fiscalCode: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
