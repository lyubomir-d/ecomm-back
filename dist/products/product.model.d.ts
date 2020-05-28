import * as mongoose from 'mongoose';
export declare const ProductSchema: any;
export interface Product extends mongoose.Document {
    id: string;
    title: string;
    description: string;
    price: number;
}
