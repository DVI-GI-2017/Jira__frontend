import {SET_CURRENT_USER} from '../../constants/User/User.constants';
import transport from '../../service/Transport/Transoprt';

export function setCurrentUser(user: any): any {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function checkAuthentication(): any {
  return transport.get('/cur-user');
}
