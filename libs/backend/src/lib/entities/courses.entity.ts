import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Course extends Document {
  @Prop()
  courseName: string;

  @Prop()
  courseType: string;

  @Prop()
  author: string;

  @Prop()
  comments: string;

  @Prop({ default: 0 })
  recommendations: number;

  @Prop([String])
  students: string[];
}

export const CourseSchema = SchemaFactory.createForClass(Course);
