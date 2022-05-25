/* eslint-disable prettier/prettier */
import {Module} from '@nestjs/common';
import{CommentService} from './comments.service';
import {CommentController} from './comments.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {ComSchema} from './comment.model';
@Module({
    imports:[MongooseModule.forFeature([{name:'Comment',schema: ComSchema }])],
    controllers: [CommentController],
    providers: [CommentService]
})
export class CommentsModule { }