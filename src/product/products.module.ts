/* eslint-disable prettier/prettier */
import {Module} from '@nestjs/common';
import{ProductService} from './products.service';
import {ProductController} from './products.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {ProdSchema} from './product.model';
@Module({
    imports:[MongooseModule.forFeature([{name:'Product',schema: ProdSchema }])],
    controllers: [ProductController],
    providers: [ProductService]
})
export class ProductsModule { }