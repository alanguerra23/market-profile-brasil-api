import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseTokensModule } from './course-tokens/course-tokens.module';
import { ServerMembersModule } from './server-members/server-members.module';
import { RemindersModule } from './reminders/reminders.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.DATABASE_URL), CourseTokensModule, ServerMembersModule, RemindersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
