import { Module } from '@nestjs/common';
import { RemindersService } from './reminders.service';
import { RemindersController } from './reminders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Reminder, ReminderSchema } from './entities/reminders.entity';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [MongooseModule.forFeature([{ name: Reminder.name, schema: ReminderSchema }]), ScheduleModule.forRoot()],
  controllers: [RemindersController],
  providers: [RemindersService],
})
export class RemindersModule {}
