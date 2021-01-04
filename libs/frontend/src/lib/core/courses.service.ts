import { Injectable } from '@angular/core';
import { Course } from './course.model';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courseUrl = 'api/courses';
  //private courses: Course[];
  constructor(private http: HttpClient) {}

  getCourses(): Course[] {
    return [
      {
        id: 1,
        courseName: 'test',
        courseType: 'test',
        author: 'test',
        comments: 'test',
        students: ['test'],
      },
      {
        id: 2,
        courseName: 'test',
        courseType: 'test',
        author: 'test',
        comments: 'test',
        students: ['test'],
      },
      {
        id: 3,
        courseName: 'test',
        courseType: 'test',
        author: 'test',
        comments: 'test',
        students: ['test'],
      },
    ];
  }

  // getCourses(): Observable<Course[]> {
  //   return this.http.get<Course[]>(this.courseUrl).pipe(
  //     tap((data) => console.log(JSON.stringify(this.courses))),
  //     catchError(this.handleError)
  //   );
  // }

  private handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
