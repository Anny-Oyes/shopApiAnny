import { IsString, IsNumber } from "class-validator";
import { IsNotEmpty, MinLength } from "class-validator/types/decorator/decorators";

export class CreateShopDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    title: string;

    @IsNumber()
    price: number;

    @IsString()
    @MinLength(15)
    description: string;

    @IsString()
    slug: string;

    @IsNumber()
    stock: number;

    @IsString()
    gender: string;
}