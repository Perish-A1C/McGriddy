import { Test, TestingModule } from '@nestjs/testing';
import { GriddyService } from './griddy.service';

describe('GriddyService', () => {
  let service: GriddyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GriddyService],
    }).compile();

    service = module.get<GriddyService>(GriddyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
