import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Student } from './student.entity';
@Entity() //sql table should be course , if u want to provide different namejust put inside () Ex: ('TestCourse')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  courseName: string;
  @Column()
  courseType: string;
  @Column()
  author: string;
  @Column()
  comments: string;

  @Column({ default: 0 })
  recommendations: number;

  @JoinTable()
  @ManyToMany((type) => Student, (student) => student.courses, {
    cascade: true, // or optionally just insert or update ['insert']
  })
  students: Student[];

  // @JoinTable()
  // @ManyToMany('Student', 'courses', {
  //   cascade: true, // or optionally just insert or update ['insert']
  // })
  // students: Student[];

  /**
   * for array datatype we should declare column like below.
   * EX:
   *  @Column('json', {nullable: true})
   *  flavors: string[]
   */
}
