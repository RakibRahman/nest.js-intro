import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';
export class CreateUserDto{
    @IsNotEmpty()
    name:string

    @IsNotEmpty()
    @IsEmail()
    email: string;

    // @IsNumber()
    age:number;
}