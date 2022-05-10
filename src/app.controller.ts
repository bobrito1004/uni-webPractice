import { Controller, Get, Render, UseInterceptors } from "@nestjs/common";
import { AppService, TimeInterceptor } from "./app.service";

@Controller()
@UseInterceptors(TimeInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  @Render("index")
  index(): any{
    return {ServerResponseTime: this.appService.getServerResponseTime()};
  }

}
