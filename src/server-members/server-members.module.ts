import { Module } from '@nestjs/common';
import { ServerMembersService } from './server-members.service';
import { ServerMembersController } from './server-members.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ServerMemberSchema, ServerMember } from './entities/server.members.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: ServerMember.name, schema: ServerMemberSchema }])],
  controllers: [ServerMembersController],
  providers: [ServerMembersService],
})
export class ServerMembersModule {}
