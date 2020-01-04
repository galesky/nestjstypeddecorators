import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.decorator';
import { UserArray } from './userArray.decorator';

interface UserInterface {
  name: string;
  id: string;
  online: boolean;
  age: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('scenario1')
  scenario1(@User('John Doe') user: UserInterface) {
    return user;
  }

  @Post('scenario2')
  scenario2(@User('string', 200) user: UserInterface) {
    return user;
  }

  @Post('scenario3')
  scenario3(
    @UserArray(['John Doe', {}]) user: UserInterface,
  ) {
    return user;
  }

  @Post('scenario4')
  scenario4(@UserArray(['string', 200, {}]) user: UserInterface) {
    return user;
  }
}
