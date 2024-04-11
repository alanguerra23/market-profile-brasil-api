export class CreateReminderDto {
  discordId: string;
  token: string;
  roles: string[];
  removeRoles: boolean;
  message: string;
  days: Date;
}
