import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema({ timestamps: true })
export class ServerMember {
  @Prop()
  discordId: string;
  
  @Prop()
  token: string;

  @Prop({
    type: [String]
  })
  roles: string[];
}

export type ServerMemberDocument = HydratedDocument<ServerMember>;

export const ServerMemberSchema = SchemaFactory.createForClass(ServerMember);
