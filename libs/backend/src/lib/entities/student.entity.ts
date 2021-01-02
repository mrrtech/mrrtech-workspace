import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Course } from './courses.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany((type) => Course, (course) => course.students)
  courses: Course[];

  // @ManyToMany('Course', 'students')
  // courses: Course[];
}
