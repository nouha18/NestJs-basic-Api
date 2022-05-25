/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import {Controller,Post,Body, Get, Param, Patch,Delete} from '@nestjs/common';
import {CommentService} from './comments.service';

@Controller('comments')
export class CommentController {
constructor(private readonly  commentService:CommentService){}

    @Post('add') 
     //http://localhost:3000/comment/add
    addComment(@Body('content') content:string,@Body('author') author:string,@Body('date') date:Date,) : any{
    const generatedId = this.commentService.insertComment(content,author,date);
    return {id: generatedId};
    }

    @Get()
    //http://localhost:3000/comment/
    async getAllComment(){
      const comment = await  this.commentService.getAllComment();
      return comment.map(com=>({id: com.id, content : com.content,author: com.author,date: com.date}));
    }
    @Get(':id')
    //http://localhost:3000/comments/getone/
    getProduct(@Param('id') prodId : string){
      return this.commentService.getComment(prodId);  
    }
    @Get('getone/:id')
    findOneComment(@Param('id') comId : string){
      return this.commentService.findOneComment(comId);  
    }
    @Patch(':id')
    EditComment(@Param('id') comId : string, @Body('author') author : string, @Body('date') date :Date , @Body('content') content : string){
     return this.commentService.EditComment(comId,content,author,date);
 
    }
    @Delete(':id')
    deleteComment(@Param('id') comId : string){
        this.commentService.DeleteCom(comId);
        return 'product deleted successfully !'
    }
}