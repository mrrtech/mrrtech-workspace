import { Injectable } from '@nestjs/common';
import { Course } from '../../entities/courses.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      courseName: 'Angular',
      courseType: ' Frontend',
      author: 'Google',
      comments: 'This is Framework',
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    return this.courses.find((item) => item.id === +id);
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }

  update(id: string, updateCourseDto: any) {
    const existingCourse = this.findOne(id);
    if (existingCourse) {
      // update the existing entity
      console.log();
    }
  }

  remove(id: string) {
    const courseIndex = this.courses.findIndex((item) => item.id === +id);
    if (courseIndex >= 0) {
      this.courses.splice(courseIndex, 1);
    }
  }
}
