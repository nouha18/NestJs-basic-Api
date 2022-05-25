/* eslint-disable prettier/prettier */
import { Controller,Body,Get,Header, Post } from '@nestjs/common';
import { AppService } from './app.service';

import * as bcrypt from 'bcrypt';
const saltedRound =10;

//appdomain.com/
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

@Get()
@Header('Content-Type','text/html')
getHello(): {name: string} {
    return {name:'alex'};
  }

@Post('api/register')
register(@Body('name' ) name: string, @Body('email') email:string,@Body('password') password:string){
const hashedpass = bcrypt.hash(password,saltedRound);
//return this.appService.create({name,email,hashedpass});
  }
}
