import { Injectable } from '@nestjs/common';
import { CreateCourseTokenDto } from './dto/create-course-token.dto';
import { UpdateCourseTokenDto } from './dto/update-course-token.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CourseToken, CourseTokenDocument } from './entities/course-tokens.entity';

@Injectable()
export class CourseTokensService {
  constructor(@InjectModel(CourseToken.name) private readonly courseTokenModel: Model<CourseTokenDocument>) {}

  async create(createCourseTokenDto: CreateCourseTokenDto) {
    return await this.courseTokenModel.create(createCourseTokenDto);
  }

  async findAll() {
    return await this.courseTokenModel.find().exec();
  }

  async findOne(id: string) {
    return await this.courseTokenModel.findById(id).exec();
  }

  async findOneByToken(token: string, status: boolean = true) {
    return await this.courseTokenModel.findOne({ token, status })
  }

  async update(id: string, updateCourseTokenDto: UpdateCourseTokenDto) {
    return await this.courseTokenModel.findByIdAndUpdate(id, updateCourseTokenDto).exec();
  }

  async remove(id: string) {
    return await this.courseTokenModel.findByIdAndDelete(id).exec();
  }
}
