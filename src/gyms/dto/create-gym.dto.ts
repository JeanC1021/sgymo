import { IsNotEmpty, IsString } from "class-validator";

export class CreateGymDto {
    @IsString()
    @IsNotEmpty()
    nit: string;
}
