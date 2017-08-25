import {SET_USERS} from '../../constants/User/User.constants';

export function setUsers(users: any): any {
  return {
    type: SET_USERS,
    users
  };
}
