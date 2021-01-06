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
  constructor(private courseService: CoursesService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        console.log(typeof courses);
        this.listOfData = courses;
        let keys = [];
        for (let key in courses) {
          if (courses.hasOwnProperty(key)) keys.push(key);
        }
        console.log(keys);
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
