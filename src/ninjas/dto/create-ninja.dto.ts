import { MinLength, IsEmail } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(3)
  name: string;
  @IsEmail({}, { message: 'email field need to be a valid email' })
  email: string;
  weapon: string;
}
