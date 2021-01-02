import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateCourseDto } from '../../dto/create-course.dto/create-course.dto';
import { PaginationQueryDto } from '../../dto/pagination-query.dto/pagination-query.dto';
import { UpdateCourseDto } from '../../dto/update-course.dto/update-course.dto';
import { Course } from '../../entities/courses.entity';
import { Student } from '../../entities/student.entity';
import { Event } from '../../entities/event.entity';
import { ConfigService, ConfigType } from '@nestjs/config';
import coursesConfig from '../../config/courses.config';
@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    private readonly connection: Connection,
    private readonly configService: ConfigService,
    @Inject(coursesConfig.KEY)
    private readonly coursesConfiguration: ConfigType<typeof coursesConfig>
  ) {
    /* Accessing process.env variables from ConfigService */
    const databaseHost = this.configService.get('database.host', 'localhost');
    console.log(databaseHost);

    console.log(coursesConfiguration.foo);

    // const coffeesConfig = this.configService.get('courses');
    // console.log(coffeesConfig);

    // const foo = this.configService.get('courses.foo');
    // console.log(foo);
  }

  findAll(paginationQueryDto: PaginationQueryDto) {
    const { limit, offset } = paginationQueryDto;
    return this.courseRepository.find({
      relations: ['students'],
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: string) {
    const course = await this.courseRepository.findOne(id, {
      relations: ['students'],
    });
    if (!course) {
      throw new NotFoundException(`course #${id} not found.`);
    }
    return course;
  }

  async create(createCourseDto: CreateCourseDto) {
    const students = await Promise.all(
      createCourseDto.students.map((name) => this.preloadStudnetByName(name))
    );
    const course = this.courseRepository.create({
      ...createCourseDto,
      students,
    });
    return this.courseRepository.save(course);
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    const students =
      updateCourseDto.students &&
      (await Promise.all(
        updateCourseDto.students.map((name) => this.preloadStudnetByName(name))
      ));
    const course = await this.courseRepository.preload({
      id: +id,
      ...updateCourseDto,
      students,
    });
    if (!course) {
      throw new NotFoundException(`Course #${id} not found.`);
    }
    return this.courseRepository.save(course);
  }

  async remove(id: string) {
    const course = await this.findOne(id);
    return this.courseRepository.remove(course);
  }

  async recommendCourse(course: Course) {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      course.recommendations++;

      const recommendEvent = new Event();
      recommendEvent.name = 'recommend_course';
      recommendEvent.type = 'course';
      recommendEvent.payload = { courseId: course.id };

      await queryRunner.manager.save(course);
      await queryRunner.manager.save(recommendEvent);

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
  private async preloadStudnetByName(name: string): Promise<Student> {
    const existingStudent = await this.studentRepository.findOne({ name });
    if (existingStudent) {
      return existingStudent;
    }
    return this.studentRepository.create({ name });
  }
}
