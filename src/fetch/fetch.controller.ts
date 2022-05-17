import { Controller, Get, Injectable, Render } from "@nestjs/common";
import { FetchService } from "./fetch.service";

@Controller()
export class FetchController {
  constructor(private readonly FetchService:FetchService ) {
  }
  @Get('fetch')
  @Render('fetch')
  fetch(){}
}
