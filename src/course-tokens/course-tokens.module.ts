import { Module } from '@nestjs/common';
import { CourseTokensService } from './course-tokens.service';
import { CourseTokensController } from './course-tokens.controller';
import { CourseToken, CourseTokenSchema } from './entities/course-tokens.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: CourseToken.name, schema: CourseTokenSchema }])],
  controllers: [CourseTokensController],
  providers: [CourseTokensService],
})
export class CourseTokensModule {}
