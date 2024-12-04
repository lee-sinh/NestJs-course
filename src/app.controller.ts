import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('user')
  getUserInfo(): string {
    return this.appService.getUserInfo();
  }
  @Get('item')
  getItemInfo(): string {
    return this.appService.getItemInfo();
  }

}
