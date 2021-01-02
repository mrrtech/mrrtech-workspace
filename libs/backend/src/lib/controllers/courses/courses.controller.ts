import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  SetMetadata,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCourseDto } from '../../dto/create-course.dto/create-course.dto';
import { PaginationQueryDto } from '../../dto/pagination-query.dto/pagination-query.dto';
import { UpdateCourseDto } from '../../dto/update-course.dto/update-course.dto';
import { CoursesService } from '../../services/courses/courses.service';
import { Public } from './../../decorators/public.decorator';
import { ParseIntPipe } from '../../pipes/parse-int/parse-int.pipe';
@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Public()
  @Get()
  findAll(@Query() paginationQueryDto: PaginationQueryDto) {
    //await new Promise((resolve) => setTimeout(resolve, 5000));
    return this.coursesService.findAll(paginationQueryDto);
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.coursesService.findOne(id);
  }

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}
