import { Injectable } from '@nestjs/common';

import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
  async create(createUserDto: UserDto) {
    createUserDto.PASSWORD = await bcrypt.hash(createUserDto.PASSWORD, 8);
    // createUserDto.PASSWORD = createUserDto.PASSWORD;
    const user = User.create(createUserDto);
    await user.save();
    return user;
  }

  async edit(ID: number, createUserDto: UserDto) {
    if(!createUserDto.PASSWORD){
      delete createUserDto.PASSWORD;
    } else {
      createUserDto.PASSWORD = await bcrypt.hash(createUserDto.PASSWORD, 8);
    }
    const user = await User.update(ID, createUserDto);
    return user;
  }

  async getAll(){
    const user = await User.find();
    return user;
  }

  async showById(ID: number): Promise<User> {
    const user = await this.findById(ID);

    delete user.PASSWORD;
    return user;
  }

  async findById(ID: number) {
    return await User.findOne(ID);
  }

  async findByEmail(username: string) {
    return await User.findOne({
      where: {
        USERNAME: username,
      },
    });
  }

  async deleteUser(ID: number) {
    return await User.delete(ID);
  }
}
