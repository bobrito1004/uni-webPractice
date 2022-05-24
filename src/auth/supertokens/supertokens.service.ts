import { Inject, Injectable } from "@nestjs/common";
import supertokens from "supertokens-node";
import Session from "supertokens-node/recipe/session";
import EmailPassword from "supertokens-node/recipe/emailpassword";

import { ConfigInjectionToken, AuthModuleConfig } from "../config.interface";

@Injectable()
export class SupertokensService {
  constructor(@Inject(ConfigInjectionToken) private config: AuthModuleConfig) {
    supertokens.init({
      appInfo: config.appInfo,
      supertokens: {
        connectionURI: "https://2f471231da9211ecb03a317579e2e21c-eu-west-1.aws.supertokens.io:3567",
        apiKey: "b2grDWyJMXXZxNjbzUYe-Ch2ILSjiv"
      },
      recipeList: [
        EmailPassword.init(),
        Session.init({
          errorHandlers: {
            onUnauthorised: async (message, request, response) => {
              response.original.redirect("http://localhost:12345/test");
            }
          }
        })
      ]
    });
  }
}