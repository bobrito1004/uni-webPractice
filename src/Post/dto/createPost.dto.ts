import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Title',
    example: 'post',
  })
  title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Content',
    example: 'post',
  })
  content: string;
}