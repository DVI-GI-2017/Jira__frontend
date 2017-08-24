import {SET_CURRENT_PROJECTS} from '../../constants/Projects/Projects.constants';

const initialState: any = {
  project: {

  }
};

export default function project(state: any = initialState, action: any = {}) {
  switch (action.type) {
    case SET_CURRENT_PROJECTS:
      return {
        project: action.project
      };
    default:
      return state;
  }
}
