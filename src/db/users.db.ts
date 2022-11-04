import { Role } from 'src/entity/role.enum';
import { User } from 'src/entity/user.entity';

export const users: User[] = [
  {
    userId: 1,
    username: 'user',
    password: 'user',
    roles: [Role.User],
  },
  {
    userId: 2,
    username: 'admin',
    password: 'admin',
    roles: [Role.Admin],
  },
];
