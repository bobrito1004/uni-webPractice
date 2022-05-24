import { Controller, Get, Render, UseInterceptors, UseGuards, Post, Req, Res } from "@nestjs/common";
import { AppService, TimeInterceptor } from "./app.service";
import { SessionContainer } from "supertokens-node/recipe/session";
import { AuthGuard } from "./auth/auth.guard";
import { Session } from "./auth/session.decorator";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

@Controller()
@UseInterceptors(TimeInterceptor)
export class AppController {
  app: firebase.app.App;
  signed_in = false;
  user_email: string;

  constructor(private readonly appService: AppService) {
    this.app = firebase.initializeApp({
      apiKey: process.env.API_KEY
    });
  }


  @Get()
  @Render("index")
  index(): any {
    return {
      signed_in: this.signed_in,
      user_email: this.user_email,
      ServerResponseTime: this.appService.getServerResponseTime()
    };
  }

  @Get('register')
  @Render('register')
  async getTest() {
    return;
  }


  @Get('login')
  @Render('login')
  async getLogin(){
    return;
  }
}


