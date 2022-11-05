import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/entity/role.enum';

export const HasRoles = (...args: Role[]) => SetMetadata('roles', args);
