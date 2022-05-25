/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
// eslint-disable-next-line prettier/prettier

import {Injectable,Post,NotFoundException} from '@nestjs/common';
import {Comment} from './comment.model';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';

@Injectable()
export class CommentService {
  comments: Comment[] = [];
    constructor(@InjectModel('Comment') private readonly CommentModel: Model<Comment>){}

    async insertComment(content: string,author: string, date: Date){
        //const prodId = Math.random().toString(36);
        const newComment = new this.CommentModel({content, author,date});
        const result = await newComment.save();
        console.log(result)
        return result._id;
    }
    async getAllComment(){
      const newComment = await this.CommentModel.find().exec();
      return newComment as Comment[]; 
    }
  
    
    getComment(comId:string){
      
    //const com = this.CommentModel.find(c => c.id === comId);
    //return com;
    }


async EditComment(comId:string,content:string,author:string,date:Date){
    const Com = await this.findOneComment(comId);
    const updatedComment= {...Comment};
    return updatedComment;
}

async DeleteCom(comId: string){
  const result = await this.CommentModel.deleteOne({_id:comId}).exec();
  console.log(result);
}

 async findOneComment(comId:string) :Promise<Comment>{
     let comment;
     try{
      comment = await this.CommentModel.findById(comId);
     }catch(error){
     throw new NotFoundException("Is that what you mean ?");
     }
   if(!comment) 
    throw new NotFoundException("try again!");
   return comment;
}

findComment(comId:string) :[Comment,number]{
    const comIndex = this.comments.findIndex(p => p.id === comId);
    const com = this.CommentModel[comIndex];
    if(!com) 
    throw new NotFoundException("Comment not found");
  return[com,comIndex];
}
}