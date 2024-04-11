import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseTokenDto } from './create-course-token.dto';

export class UpdateCourseTokenDto extends PartialType(CreateCourseTokenDto) {
  status: boolean
}
