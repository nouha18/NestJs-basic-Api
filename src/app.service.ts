/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {Repository} from 'typeorm';
import {User } from '../User.entity'
@Injectable()
export class AppService {

   getUser(userId:number){
    //    const user = userRepository.finOne({
    //        where: {
    //            id:userId
    //        }
    //    }

     //  );
       return "ok found here";
   } 
}
