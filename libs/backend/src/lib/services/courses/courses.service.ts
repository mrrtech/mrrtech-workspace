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

  create(createCoffeeDto: any) {
    this.courses.push(createCoffeeDto);
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      // update the existing entity
    }
  }

  remove(id: string) {
    const coffeeIndex = this.courses.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.courses.splice(coffeeIndex, 1);
    }
  }
}
