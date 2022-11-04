import { Injectable } from '@nestjs/common';
import { users } from 'src/db/users.db';
import { User } from 'src/entity/user.entity';

@Injectable()
export class UsersService {
  private readonly users = users;

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((u) => u.username === username);
  }
}
