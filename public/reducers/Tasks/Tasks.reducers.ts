import {SET_TASKS} from '../../constants/Tasks/Tasks.constants';

const initialState: any = {
  tasks: []
};

export default function tasks(state: any = initialState, action: any = {}) {
  switch (action.type) {
    case SET_TASKS:
      return {
        tasks: action.tasks
      };
    default:
      return state;
  }
}
