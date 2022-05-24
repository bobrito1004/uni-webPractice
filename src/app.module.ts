import { Module, NestModule, MiddlewareConsumer, RequestMethod } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ToDoListModule } from "./toDoList/toDoList.module";
import { PostModule } from "./Post/post.module";
import { UserModule } from "./User/user.module";
import { FetchModule } from "./fetch/fetch.module";
import { ChatModule } from "./chat/chat.module";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";


@Module({
  imports: [ConfigModule.forRoot(), ToDoListModule, PostModule, UserModule, FetchModule, ChatModule,
    AuthModule.forRoot({
      connectionURI: "https://2f471231da9211ecb03a317579e2e21c-eu-west-1.aws.supertokens.io:3567",
      apiKey: "b2grDWyJMXXZxNjbzUYe-Ch2ILSjiv",
      appInfo: {
        // Learn more about this on https://supertokens.com/docs/emailpassword/appinfo
        appName: "itmo282768",
        apiDomain: "http://localhost:12345",
        websiteDomain: "http://localhost:12345",
        apiBasePath: "/auth",
        websiteBasePath: "/auth"
      }
    })
  ],
  controllers: [AppController],
  providers: [
    AppService
  ]
})
export class AppModule {
}