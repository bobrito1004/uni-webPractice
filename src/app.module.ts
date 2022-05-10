import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToDoListModule } from "./toDoList/toDoList.module";
import { PostModule } from "./Post/post.module";
import { UserModule } from "./User/user.module";


@Module({
  imports: [ToDoListModule, PostModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
