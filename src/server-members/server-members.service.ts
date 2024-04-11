import { Injectable } from '@nestjs/common';
import { CreateServerMemberDto } from './dto/create-server-member.dto';
import { UpdateServerMemberDto } from './dto/update-server-member.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ServerMember, ServerMemberDocument } from './entities/server.members.entity';

@Injectable()
export class ServerMembersService {
  constructor(@InjectModel(ServerMember.name) private readonly serverMemberModel: Model<ServerMemberDocument>) {}

  async create(createServerMemberDto: CreateServerMemberDto) {
    return await this.serverMemberModel.create(createServerMemberDto);
  }

  async findAll() {
    return await this.serverMemberModel.find().exec();
  }

  async findOne(id: string) {
    return await this.serverMemberModel.findById(id).exec();
  }

  async findOneByToken(token: string) {
    return await this.serverMemberModel.findOne({ token: token }).exec();
  }

  async findOneByDiscordId(discordId: string) {
    return await this.serverMemberModel.findOne({ discordId: discordId }).exec();
  }

  async update(id: string, updateServerMemberDto: UpdateServerMemberDto) {
    return await this.serverMemberModel.findByIdAndUpdate(id, updateServerMemberDto).exec();
  }

  async remove(id: string) {
    return await this.serverMemberModel.findByIdAndDelete(id).exec();
  }
}
