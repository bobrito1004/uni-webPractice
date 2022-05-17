import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToDoListModule } from "./toDoList/toDoList.module";
import { PostModule } from "./Post/post.module";
import { UserModule } from "./User/user.module";
import { FetchModule } from './fetch/fetch.module';
import { ChatModule } from "./chat/chat.module";


@Module({
  imports: [ToDoListModule, PostModule, UserModule, FetchModule, ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
