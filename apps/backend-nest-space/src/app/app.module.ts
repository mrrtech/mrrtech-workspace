import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BackendModule } from '@mrrtech-workspace/backend';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import appConfig from './../config/app.config';

@Module({
  imports: [
    BackendModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        DATABASE_HOST: Joi.required(),
        DATABASE_PORT: Joi.number().default(5432),
      }),
      load: [appConfig],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        database: process.env.DATABASE_NAME,
        schema: process.env.DATABASE_SCHEMA,
        host: process.env.DATABASE_HOST,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        port: +process.env.DATABASE_PORT,
        retryAttempts: 3,
        autoLoadEntities: true,
        synchronize: true, // disable this feature in production
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
