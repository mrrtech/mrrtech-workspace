import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from './../../core/course.model';
import { CoursesService } from './../../core/courses.service';
@Component({
  selector: 'mrrtech-workspace-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  errorMessage = '';
  listOfData: Course[];
  students: any;
  constructor(private courseService: CoursesService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.listOfData = courses.data;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
