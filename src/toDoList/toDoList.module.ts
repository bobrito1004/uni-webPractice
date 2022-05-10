import { Module } from '@nestjs/common';
import { ToDoListController } from "./toDoList.controller";
import { ToDoListService } from "./toDoList.service";


@Module({
  imports: [],
  controllers: [ToDoListController],
  providers: [ToDoListService],
})
export class ToDoListModule {}
