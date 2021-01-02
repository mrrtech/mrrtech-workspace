import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CoursesController } from './controllers/courses/courses.controller';
import { CoursesService } from './services/courses/courses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Course } from './entities/courses.entity';
import { Student } from './entities/student.entity';
import { Event } from './entities/event.entity';
import coursesConfig from './config/courses.config';
import { ApiKeyGuard } from './guards/api-key.guard';
import { APP_GUARD } from '@nestjs/core';
import { LoggingMiddleware } from './middleware/logging/logging.middleware';
@Module({
  imports: [
    TypeOrmModule.forFeature([Course, Student, Event]),
    ConfigModule.forFeature(coursesConfig),
  ],
  controllers: [CoursesController],
  providers: [CoursesService, { provide: APP_GUARD, useClass: ApiKeyGuard }],
  exports: [CoursesService],
})
export class BackendModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
    //consumer.apply(LoggingMiddleware).forRoutes({path:'courses',method: RequestMethod.GET });
    //consumer.apply(LoggingMiddleware).exclude('courses').forRoutes('*');
  }
}
