import { AuthGuard } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

export class LcalAuthGuard extends AuthGuard('jwt') {

}