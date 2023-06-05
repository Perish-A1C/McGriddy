import { Test, TestingModule } from '@nestjs/testing';
import { GriddyController } from './griddy.controller';
import { GriddyService } from './griddy.service';

describe('GriddyController', () => {
  let controller: GriddyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GriddyController],
      providers: [GriddyService],
    }).compile();

    controller = module.get<GriddyController>(GriddyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
