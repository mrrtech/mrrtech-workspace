import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Event extends mongoose.Document {
  // Note "entity" was removed from the class "name"
  @Prop()
  type: string;

  @Prop({ index: true })
  name: string;

  @Prop(mongoose.SchemaTypes.Mixed)
  payload: string;
  //Need to chnage it to  - Record<string, any> instead of string - TO-DO
}

export const EventSchema = SchemaFactory.createForClass(Event);
EventSchema.index({ name: 1, type: -1 });
