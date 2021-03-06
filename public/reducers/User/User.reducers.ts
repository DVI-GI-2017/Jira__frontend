import isEmpty from '../../service/Validators/CheckUser/CheckUser';
import {SET_CURRENT_USER} from '../../constants/User/User.constants';

const initialState: any = {
  isAuthenticated: false,
  user: {}
};

export default function authentication(state: any = initialState, action: any = {}) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !!action.user,
        user: action.user
      };
    default:
      return state;
  }
}
