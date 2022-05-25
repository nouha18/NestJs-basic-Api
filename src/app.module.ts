/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './product/products.module';
import { CommentsModule } from './comment/comments.module';
@Module({
  imports: [ProductsModule,CommentsModule,MongooseModule.forRoot('mongodb://localhost:27017/myapp')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
