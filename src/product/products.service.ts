/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
// eslint-disable-next-line prettier/prettier

import {Injectable,Post,NotFoundException} from '@nestjs/common';
import {Product} from './product.model';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';

@Injectable()
export class ProductService {
    products: Product[] = [];
    constructor(@InjectModel('Product') private readonly ProductModel: Model<Product>){}

    async insertProduct(title: string,desc: string, price:number){
        //const prodId = Math.random().toString(36);
        const newProduct = new this.ProductModel({title, description:desc,price});
        const result = await newProduct.save();
        console.log(result)
        return result._id;
    }
    async getAllProducts(){
      const products = await this.ProductModel.find().exec();
      return products as Product[]; 
    }
  
    
    getProduct(prodId:string){
    const product = this.products.find(p => p.id === prodId);
    return product;
    }


async updateProduct(productId:string,title:string,description:string,price:number){
    const Product = await this.findOneProduct(productId);
    const updatedProduct= {...Product};
   if(title){
       updatedProduct.title= title;

   }
   if(description){
    updatedProduct.description = description;
    
   }
   if(price){
   updatedProduct.price = price;
    
}
return updatedProduct;
}

async DeleteProduct(prodId: string){
  const result = await this.ProductModel.deleteOne({_id:prodId}).exec();
  console.log(result);
}

 async findOneProduct(prodId:string) :Promise<Product>{
     let product;
     try{
        product = await this.ProductModel.findById(prodId);
     }catch(error){
     throw new NotFoundException("It seems that the Product is not found");
     }
   if(!product) 
    throw new NotFoundException("try again!");
   return product;
}

findProduct(prodId:string) :[Product,number]{
    const productIndex = this.products.findIndex(p => p.id === prodId);
    const product = this.products[productIndex];
    if(!product) 
    throw new NotFoundException("Product not found");
  return[product,productIndex];
}
}