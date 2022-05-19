import { ToDoListService } from "./toDoList.service";
export declare class ToDoListController {
    private readonly toDoListService;
    constructor(toDoListService: ToDoListService);
    toDoList(): void;
}
