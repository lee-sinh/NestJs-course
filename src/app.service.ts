import { Injectable } from '@nestjs/common';
import { UserService } from './user/user.service';
import { ItemService } from './item/item.service';

@Injectable()
export class AppService {
  constructor(
    private readonly userService: UserService,
    private readonly itemService: ItemService,
  ) {}
  
  getHello(): string {
    return 'Hello World!';
  }
  getUserInfo(): string {
    return this.userService.getUserInfo();
  }
  getItemInfo(): string {
    return this.itemService.getItemInfo();
  }

}
