import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
  describe('getUserInfo', () => {
    it('should return user info', () => {
      expect(appController.getUserInfo()).toBe('User info retrieved!');
    });
  });
  describe('getItemInfo', () => {
    it('should return item info', () => {
      expect(appController.getItemInfo()).toBe('Item info retrieved!');
    });
  });
});
