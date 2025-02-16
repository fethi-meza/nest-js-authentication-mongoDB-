import { Body,Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { singupDto } from './dtos/singuo.dtos';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  //post signup request(creating new user)
@Post('signup')
async signup(@Body() SignupData: singupDto) {

}

  //post login request


  //post refresh token
}
