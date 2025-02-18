import { BadRequestException, Injectable } from '@nestjs/common';
import { singupDto } from './dtos/singuo.dtos';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }


    async signup(signupData: singupDto) {
        const { email, password  ,name} = signupData;
        //check if user already exists
        const emailInuse = await this.userModel.findOne({ email: signupData.email });
        if (emailInuse) {
            throw new BadRequestException('Email already in use');
        }

        //hash password
        const hashedPassword = await bcrypt.hash(signupData.password, 10);

        //create user
        await this.userModel.create({ email, password: hashedPassword ,name});
        return { email, name }; 
    }



}

