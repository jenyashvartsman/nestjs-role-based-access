import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { Role } from 'src/entity/role.enum';
import { HasRoles } from '../auth/decorators/has-roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @HasRoles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  async users() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async profile(@Request() req) {
    return req.user;
  }

  @HasRoles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('admin')
  onlyAdmin(@Request() req) {
    return req.user;
  }

  @HasRoles(Role.User)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('user')
  onlyUser(@Request() req) {
    return req.user;
  }
}
