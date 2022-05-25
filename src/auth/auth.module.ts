/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import {AuthController} from './auth.controller';
import {JwtStrategy} from './strategy/jwt.strategy';
@Module({
  imports:[JwtModule.register({secret:'super-cat'})],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy],
})
export class AuthModule {}
