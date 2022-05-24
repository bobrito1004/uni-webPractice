import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
export class createUserDTO{
    @IsEmail()
      @ApiProperty({
        description: 'Email',
        example: 'example@gmail.com',
      })
      email: string;

    @IsNotEmpty()
      @ApiProperty({
        description: 'Name',
        example: 'Alex',
      })
      name: string;
      constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
      }
}