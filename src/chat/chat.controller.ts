import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {Controller, Get, Render} from "@nestjs/common";

@ApiTags('chat')
@Controller()
export class ChatController {
  @ApiOperation({
    summary: "chat",
    description: "chat"
  })
  @Get('chat')
  @Render('chat')
  showChat(){
    return;
  }
}