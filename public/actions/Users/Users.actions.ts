import {SET_USERS} from '../../constants/User/User.constants';
import transport from '../../service/Transport/Transoprt';

export function setUsers(users: any): any {
  return {
    type: SET_USERS,
    users
  };
}

export function getUsers(): any {
  return transport.get('/users');
}
