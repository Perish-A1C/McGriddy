import { Injectable } from '@nestjs/common';
import { CreateGriddyDto } from './dto/create-griddy.dto';
import { UpdateGriddyDto } from './dto/update-griddy.dto';

@Injectable()
export class GriddyService {
  create(createGriddyDto: CreateGriddyDto) {
    return 'This action adds a new griddy';
  }

  findAll() {
    return `This is the Griddy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} griddy`;
  }

  update(id: number, updateGriddyDto: UpdateGriddyDto) {
    return `This action updates a #${id} griddy`;
  }

  remove(id: number) {
    return `This action removes a #${id} griddy`;
  }
}
