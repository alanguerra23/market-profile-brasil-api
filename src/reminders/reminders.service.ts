import { Injectable } from '@nestjs/common';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';
import { Reminder, ReminderDocument } from './entities/reminders.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class RemindersService {
  constructor(@InjectModel(Reminder.name) private readonly reminderModel: Model<ReminderDocument>) {}

  async create(createReminderDto: CreateReminderDto) {
    return await this.reminderModel.create(createReminderDto);
  }

  async findAll() {
    return await this.reminderModel.find().exec();
  }

  async findAllRememberNow() {
    return await this.reminderModel.find({ rememberNow: true }).exec();
  }

  async findAllNotReminded() {
    return await this.reminderModel.find({ isReminded: false }).exec();
  }

  async findOne(id: string) {
    return await this.reminderModel.findById(id).exec();
  }

  async findOneByToken(token: string) {
    return await this.reminderModel.findOne({ token: token }).exec();
  }

  async findOneByDiscordId(discordId: string) {
    return await this.reminderModel.findOne({ discordId: discordId }).exec();
  }

  async update(id: string, updateReminderDto: UpdateReminderDto) {
    return await this.reminderModel.findByIdAndUpdate(id, updateReminderDto).exec();
  }

  async remove(id: string) {
    return await this.reminderModel.findByIdAndDelete(id).exec();
  }

  // verificar se tem algum reminder para ser lembrado, se tiver, lembrar
  @Cron('45 * * * * *')
  async handleCron() {
    const reminders = this.findAllNotReminded();

    reminders.then((reminders) => {
      reminders.forEach(async (reminder) => {
        if (reminder.dateReminder <= new Date()) {
          await this.reminderModel.findByIdAndUpdate(reminder._id, { rememberNow: true }).exec();
        }
      });
    });
  }
}
