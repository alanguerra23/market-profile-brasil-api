import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RemindersService } from './reminders.service';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';

@Controller('reminders')
export class RemindersController {
  constructor(private readonly remindersService: RemindersService) {}

  @Post()
  create(@Body() createReminderDto: CreateReminderDto) {
    return this.remindersService.create(createReminderDto);
  }

  @Get()
  findAll() {
    return this.remindersService.findAll();
  }

  @Get('remember-now')
  findAllRememberNow() {
    return this.remindersService.findAllRememberNow();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.remindersService.findOne(id);
  }

  @Get('token/:token')
  findOneByToken(@Param('token') token: string) {
    return this.remindersService.findOneByToken(token);
  }

  @Get('discord/:discordId')
  findOneByDiscordId(@Param('discordId') discordId: string) {
    return this.remindersService.findOneByDiscordId(discordId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReminderDto: UpdateReminderDto) {
    return this.remindersService.update(id, updateReminderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.remindersService.remove(id);
  }
}
