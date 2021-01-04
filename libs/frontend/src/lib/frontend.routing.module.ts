import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { SearchCourseComponent } from './components/search-course/search-course.component';
const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    pathMatch: 'full',
  },

  {
    path: 'addcourse',
    component: AddCourseComponent,
    pathMatch: 'full',
  },
  {
    path: 'editcourse/:id',
    component: AddCourseComponent,
    pathMatch: 'full',
  },
  {
    path: 'searchcourse',
    component: SearchCourseComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontendRoutingModule {}
