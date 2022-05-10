import { Controller, Get, Injectable, Render } from "@nestjs/common";
import { ToDoListService } from "./toDoList.service";

@Controller()
export class ToDoListController {
  constructor(private readonly toDoListService:ToDoListService ) {
  }
  @Get()
  @Render('ToDoList')
  toDoList(){}
}
