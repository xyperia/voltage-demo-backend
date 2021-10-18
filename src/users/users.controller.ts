import { Controller, Get, Post, Body, Param, UseGuards, Put } from '@nestjs/common';

import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Post('')
  create(@Body() userData: User){
    return this.usersService.create(userData);
  }

  @Put(':ID')
  edit(@Param('ID') ID: number, @Body() userData: User){
    return this.usersService.edit(ID, userData);
  }

  @Get('getall')
  getAll() {
    return this.usersService.getAll();
  }

  @Get(':ID')
  show(@Param('ID') ID: string) {
    return this.usersService.showById(+ID);
  }

  @Get('delete/:ID')
  deleteUser(@Param('ID') ID: number) {
    return this.usersService.deleteUser(ID);
  }
}
