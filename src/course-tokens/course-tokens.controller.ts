import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourseTokensService } from './course-tokens.service';
import { CreateCourseTokenDto } from './dto/create-course-token.dto';
import { UpdateCourseTokenDto } from './dto/update-course-token.dto';

@Controller('course-tokens')
export class CourseTokensController {
  constructor(private readonly courseTokensService: CourseTokensService) {}

  @Post()
  create(@Body() createCourseTokenDto: CreateCourseTokenDto) {
    return this.courseTokensService.create(createCourseTokenDto);
  }

  @Get()
  findAll() {
    return this.courseTokensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseTokensService.findOne(id);
  }

  @Get('token/:token')
  findOneByToken(@Param('token') token: string) {
    return this.courseTokensService.findOneByToken(token);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseTokenDto: UpdateCourseTokenDto) {
    return this.courseTokensService.update(id, updateCourseTokenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseTokensService.remove(id);
  }
}
