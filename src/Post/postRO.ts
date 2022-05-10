import { ApiProperty } from '@nestjs/swagger';

export class PostRO {
  @ApiProperty({
    description: 'Id',
    example: '1',
  })
  id: number;

  @ApiProperty({
    description: 'Title',
    example: 'post',
  })
  title: string;

  @ApiProperty({
    description: 'Content',
    example: 'post',
  })
  content: string;

  @ApiProperty({
    description: 'Published',
    example: 'true',
  })
  published: boolean;

  constructor(id: number, title: string, content: string, pub: boolean) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.published = pub;
  }
}