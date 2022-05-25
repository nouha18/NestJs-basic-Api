/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import {Controller,Post,Body, Get, Param, Patch,Delete} from '@nestjs/common';
import {ProductService} from './products.service';

@Controller('products')
export class ProductController {
constructor(private readonly productService:ProductService){}

    @Post() 
     addProduct(@Body('title') prodtitle:string,@Body('description') desc:string,@Body('price') price:number,) : any{
        const generatedId = this.productService.insertProduct(prodtitle,desc,price);
        return {id: generatedId};
    }
    @Get()
    //http://localhost:3000/products/
    async getAllProducts(){
      const products = await  this.productService.getAllProducts();
      return products.map(prod=>({id: prod.id, title : prod.title,description: prod.description,price: prod.price}));
    }
    @Get(':id')
    //http://localhost:3000/products/getone/
    getProduct(@Param('id') prodId : string){
      return this.productService.getProduct(prodId);  
    }
    @Get('getone/:id')
    findOneProduct(@Param('id') prodId : string){
      return this.productService.findOneProduct(prodId);  
    }
    @Patch(':id')
    updateProduct(@Param('id') prodId : string, @Body('title') title : string, @Body('description') description :string , @Body('price') price : number){
     return this.productService.updateProduct(prodId,title,description,price);
    
    }
    @Delete(':id')
    deleteProduct(@Param('id') prodId : string){
        this.productService.DeleteProduct(prodId);
        return 'product deleted successfully !'
    }
}