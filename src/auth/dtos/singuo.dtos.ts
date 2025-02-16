import { IsEmail, IsString, Matches, Min, MinLength } from "class-validator";


export class singupDto {
    @IsString()
    name: string;
    @IsEmail()
    email: string;
    @IsString()
    @MinLength(8)
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {message: 'password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter and one number'})
    password: string;
}