import { PartialType } from '@nestjs/mapped-types';
import { CreateGriddyDto } from './create-griddy.dto';

export class UpdateGriddyDto extends PartialType(CreateGriddyDto) {}
