import { Module } from '@nestjs/common';
import { CourseRatingService } from './course-rating/course-rating.service';
import { BackendModule } from '@mrrtech-workspace/backend';
@Module({
  imports: [BackendModule],
  controllers: [],
  providers: [CourseRatingService],
  exports: [],
})
export class BackendCourseRatingModule {}
