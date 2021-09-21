import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  us_name: string;

  @Prop()
  us_mail: string;

  @Prop()
  us_pw: string;

}

export const UserSchema = SchemaFactory.createForClass(User);