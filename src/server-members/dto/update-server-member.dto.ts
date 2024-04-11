import { PartialType } from '@nestjs/mapped-types';
import { CreateServerMemberDto } from './create-server-member.dto';

export class UpdateServerMemberDto extends PartialType(CreateServerMemberDto) {}
