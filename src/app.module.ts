/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './product/products.module';
import { CommentsModule } from './comment/comments.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [ProductsModule,CommentsModule,AuthModule,MongooseModule.forRoot('mongodb://localhost:27017/myapp'), AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
