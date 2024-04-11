import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServerMembersService } from './server-members.service';
import { CreateServerMemberDto } from './dto/create-server-member.dto';
import { UpdateServerMemberDto } from './dto/update-server-member.dto';

@Controller('server-members')
export class ServerMembersController {
  constructor(private readonly serverMembersService: ServerMembersService) {}

  @Post()
  create(@Body() createServerMemberDto: CreateServerMemberDto) {
    return this.serverMembersService.create(createServerMemberDto);
  }

  @Get()
  findAll() {
    return this.serverMembersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serverMembersService.findOne(id);
  }

  @Get('token/:token')
  findOneByToken(@Param('token') token: string) {
    return this.serverMembersService.findOneByToken(token);
  }

  @Get('discord/:discordId')
  findOneByDiscordId(@Param('discordId') discordId: string) {
    return this.serverMembersService.findOneByDiscordId(discordId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServerMemberDto: UpdateServerMemberDto) {
    return this.serverMembersService.update(id, updateServerMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serverMembersService.remove(id);
  }
}
