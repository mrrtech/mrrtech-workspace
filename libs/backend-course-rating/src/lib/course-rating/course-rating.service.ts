import { Injectable } from '@nestjs/common';
import { CoursesService } from 'libs/backend/src/lib/services/courses/courses.service';

@Injectable()
export class CourseRatingService {
  constructor(private readonly coursesService: CoursesService) {}
}
