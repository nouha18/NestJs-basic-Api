/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import * as mongoose from 'mongoose';
export const ComSchema = new mongoose.Schema({
    content:{type: String, required: true},
    author: {type: String, required: true},
    date: {type: Date, required: false, default: Date.now() }
}); 
export interface Comment extends mongoose.Document {
id : string;
content:string;
author:string;
date:number;

}


