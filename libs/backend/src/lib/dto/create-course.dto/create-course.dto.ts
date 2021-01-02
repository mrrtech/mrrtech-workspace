import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateCourseDto {
  @ApiProperty({ description: 'The name of the course' })
  @IsString()
  readonly courseName: string;
  @ApiProperty({ description: 'The name of the course type' })
  @IsString()
  readonly courseType: string;
  @ApiProperty({ description: 'This is course author name' })
  @IsString()
  readonly author: string;
  @ApiProperty({ description: 'This is the course comments' })
  @IsString()
  readonly comments: string;

  @IsString({ each: true })
  readonly students: string[];

  /** the below IsString is for objects like [] 
  @IsString({each:true})*/
}
