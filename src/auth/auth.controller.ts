import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  @Post('register')
  async register(@Body() dto: AuthDto) {}

  @HttpCode(200) //only success get
  @Post('login')
  async login(@Body() dto: AuthDto) {}
}
