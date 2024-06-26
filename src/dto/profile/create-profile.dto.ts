import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateProfileDto {
    @IsString()
    document: string;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsDate()
    birthDate: Date;

    @IsString()
    address: string;

    @IsNumber()
    phoneNumber: number;

    @IsString()
    gender: string

}
