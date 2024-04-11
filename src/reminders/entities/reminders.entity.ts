import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema({ timestamps: true })
export class Reminder {
  @Prop()
  discordId: string;

  @Prop()
  token: string;

  @Prop({
    type: [String]
  })
  roles: string[];

  @Prop({ default: false })
  removeRoles: boolean;

  @Prop()
  message: string;

  @Prop()
  dateReminder: Date;

  @Prop()
  days: Number;

  @Prop({ default: false })
  rememberNow: boolean;

  @Prop({ default: false })
  isReminded: boolean;
}

export type ReminderDocument = HydratedDocument<Reminder>;

export const ReminderSchema = SchemaFactory.createForClass(Reminder);

ReminderSchema.pre('save', function (next) {
  if (!this.dateReminder) {
    this.dateReminder = new Date();

    if (this.days) {
      this.dateReminder.setDate(this.dateReminder.getDate() + Number(this.days));
    }
  }
  next();
});
