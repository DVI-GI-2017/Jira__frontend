import {SET_USERS} from '../../constants/User/User.constants';

const initialState: any = {
  users: []
};

export default function users(state: any = initialState, action: any = {}) {
  switch (action.type) {
    case SET_USERS:
      return {
        users: action.users,
      };
    default:
      return state;
  }
}
