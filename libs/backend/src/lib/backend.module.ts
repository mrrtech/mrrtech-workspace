import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CoursesController } from './controllers/courses/courses.controller';
import { CoursesService } from './services/courses/courses.service';
import { Course, CourseSchema } from './entities/courses.entity';
import { Event, EventSchema } from './entities/event.entity';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Course.name,
        schema: CourseSchema,
      },
      {
        name: Event.name,
        schema: EventSchema,
      },
    ]),
  ],
  controllers: [CoursesController],
  providers: [CoursesService],
  exports: [],
})
export class BackendModule {}
