import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm"
import { Shop } from "./entities/shop.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Shop])],
    controllers: [],
    providers: [],
})
export class ShopModules {}