import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { ROL } from "src/Enums/rol.enum";

export class CreateUserDto {

    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    accountName: string;

    @IsEnum(ROL)
    rol: ROL;
}
