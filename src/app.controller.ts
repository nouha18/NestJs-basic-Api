/* eslint-disable prettier/prettier */
import { Controller,Body,Request,Get,Header, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import {GetCurrentUserById} from './utils';
import * as bcrypt from 'bcrypt';
import { AuthGuard } from '@nestjs/passport';
import { LcalAuthGuard } from './utils/Gards/jwt-gards.gard';
const saltedRound =10;

@UseGuards(LcalAuthGuard)
//appdomain.com/
@Controller()
export class AppController {
 constructor(private readonly appService: AppService) {}

@Get()
@Header('Content-Type','text/html')
getHello(): {name: string} {
  return {name:'alex'};
  }

 @Get()
@Header('Content-Type','text/html')
getHome(@GetCurrentUserById() id: number): string {
  console.log(id);

    return this.appService.getUser(id);
  }

@Post('api/register')
register(@Body('name' ) name: string, @Body('email') email:string,@Body('password') password:string){
const hashedpass = bcrypt.hash(password,saltedRound);
//return this.appService.create({name,email,hashedpass});
  }
}
