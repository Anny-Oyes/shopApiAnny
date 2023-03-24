import { IsString, IsNumber } from "class-validator";
import { IsNotEmpty, IsOptional, MinLength } from "class-validator/types/decorator/decorators";
import { Unique } from "typeorm";

export class CreateShopDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    title: string;

    @IsNumber()
    @IsOptional()
    price: number;

    @IsString()
    @IsOptional()
    @MinLength(15)
    description: string;

    @IsString()
    @IsOptional()
    slug: string;

    @IsNumber()
    stock: number;

    @IsString()
    @IsOptional()
    gender: string;
}