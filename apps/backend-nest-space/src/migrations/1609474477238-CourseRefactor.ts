import { MigrationInterface, QueryRunner } from 'typeorm';

export class CourseRefactor1609474477238 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "course" RENAME COLUMN "name" TO "title"`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "course" RENAME COLUMN "title" TO "name"`
    );
  }
}
