import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { VService } from './v.service';
import { CreateVDto } from './dto/create-v.dto';
import { UpdateVDto } from './dto/update-v.dto';

@Controller('v')
export class VController {
  constructor(private readonly vService: VService) {}

  @Post()
  create(@Body() createVDto: CreateVDto) {
    console.log("Passando pelo controller");
    return this.vService.create(createVDto);
  }

  @Get()
  findAll() {
    console.log("Passando pelo controller");
    return this.vService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateVDto: UpdateVDto) {
    console.log("Passando pelo controller");
    return this.vService.update(id, updateVDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    console.log("Passando pelo controller");
    return this.vService.remove(id);
  }
}
