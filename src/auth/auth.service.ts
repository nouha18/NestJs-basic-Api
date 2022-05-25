/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto';
import { JwtService } from '@nestjs/jwt';
const users = require ('../../Users.json');

@Injectable()
export class AuthService {
constructor(private jwtService: JwtService){

}

    signinLocal(dto : AuthDto){
    //retreive user
    const user = users.find((_user) => _user.email == dto.email);
    console.log(user);
    if(!user){
    throw new  UnauthorizedException('no user with this email');
    }
    if(user.password !== dto.password){
    throw new  UnauthorizedException('erroned credential ');
    }
    return this.signUser(user.id,user.email,'user');
    }

   // signupLocal(dto: AuthDto){}
signUser(userId:number,email:string,type:string){
    return this.jwtService.sign({sub:userId,email,claim:type})
}


}
