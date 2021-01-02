import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Course } from '../../entities/courses.entity';
import { Event } from './../../entities/event.entity';
import { Connection, Model } from 'mongoose';
import { CreateCourseDto } from '../../dto/create-course.dto/create-course.dto';
import { UpdateCourseDto } from '../../dto/update-course.dto/update-course.dto';
import { PaginationQueryDto } from './../../dto/pagination-query.dto/pagination-query.dto';
@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(Course.name) private readonly courseModel: Model<Course>,
    @InjectConnection() private readonly connection: Connection,
    @InjectModel(Event.name) private readonly eventModel: Model<Event>
  ) {}
  findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.courseModel.find().skip(offset).limit(limit).exec();
  }

  async findOne(id: string) {
    const course = await this.courseModel.findOne({ _id: id }).exec();
    if (!course) {
      throw new NotFoundException(`Course #{id} not found`);
    }
    return course;
  }

  create(createCourseDto: CreateCourseDto) {
    const course = new this.courseModel(createCourseDto);
    return course.save();
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    const existingCourse = await this.courseModel
      .findOneAndUpdate({ _id: id }, { $set: updateCourseDto }, { new: true })
      .exec();
    if (!existingCourse) {
      throw new NotFoundException(`Course #{id} not found.`);
    }
    return existingCourse;
  }

  async remove(id: string) {
    const course = await this.courseModel.deleteOne(id);
    return course.remove();
  }

  async recommendCourse(course: Course) {
    const session = await this.connection.startSession();
    session.startTransaction();

    try {
      course.recommendations++;

      const recommendEvent = new this.eventModel({
        name: 'recommend_course',
        type: 'course',
        payload: { courseId: course.id },
      });
      await recommendEvent.save({ session });
      await course.save({ session });

      await session.commitTransaction();
    } catch (err) {
      await session.abortTransaction();
    } finally {
      session.endSession();
    }
  }
}
