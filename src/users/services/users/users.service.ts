import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types/User';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'akorede234',
      password: 'korede',
    },
  ];

  getUsers() {
    return this.users.map((user) => plainToClass(SerializedUser, user));
  }

  getUserByUsername(username: string) {
    const user = this.users.find((user) => user.username === username);
    return new SerializedUser(user);
  }
}
