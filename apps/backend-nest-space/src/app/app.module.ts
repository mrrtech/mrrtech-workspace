import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BackendModule } from '@mrrtech-workspace/backend';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    BackendModule,
    MongooseModule.forRoot('mongodb://localhost:27017/mrrtechdb', {
      useFindAndModify: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
