import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/entity/user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user.password === pass) {
      const { password, ...result } = user;
      return result;
    } else {
      return null;
    }
  }

  async login(user: User): Promise<any> {
    const payload = {
      username: user.username,
      sub: user.userId,
      roles: user.roles,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
