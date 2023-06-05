import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GriddyService } from './griddy.service';
import { CreateGriddyDto } from './dto/create-griddy.dto';
import { UpdateGriddyDto } from './dto/update-griddy.dto';

@Controller('griddy')
export class GriddyController {
  constructor(private readonly griddyService: GriddyService) {}

  @Post()
  create(@Body() createGriddyDto: CreateGriddyDto) {
    return this.griddyService.create(createGriddyDto);
  }

  @Get('Griddy')
  findAll() {
    return this.griddyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.griddyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGriddyDto: UpdateGriddyDto) {
    return this.griddyService.update(+id, updateGriddyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.griddyService.remove(+id);
  }
}
