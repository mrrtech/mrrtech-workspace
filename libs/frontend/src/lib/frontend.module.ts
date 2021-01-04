import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedNzZorroModule } from '@mrrtech-workspace/shared/nz-zorro';
import { CoursesComponent } from './components/courses/courses.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { FrontendRoutingModule } from './frontend.routing.module';
import { SearchCourseComponent } from './components/search-course/search-course.component';
@NgModule({
  declarations: [CoursesComponent, AddCourseComponent, SearchCourseComponent],
  imports: [CommonModule, SharedNzZorroModule, FrontendRoutingModule],
})
export class FrontendModule {}
