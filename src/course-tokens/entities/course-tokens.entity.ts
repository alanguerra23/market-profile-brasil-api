import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema({ timestamps: true })
export class CourseToken {
  @Prop()
  token: string;

  @Prop({
    type: [String]
  })
  roles: string[];

  @Prop({ default: true })
  status: boolean;
}

export type CourseTokenDocument = HydratedDocument<CourseToken>;

export const CourseTokenSchema = SchemaFactory.createForClass(CourseToken);
