import { IsNotEmpty } from "class-validator";

export class CreateGymDto {
    @IsNotEmpty()
    nit: string;

    @IsNotEmpty()
    gym: string;

    @IsNotEmpty()
    owner: string;
}
