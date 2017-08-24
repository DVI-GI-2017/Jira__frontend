import {SET_PROJECTS} from '../../constants/Projects/Projects.constants';

const initialState: any = {
  projects: []
};

export default function projects(state: any = initialState, action: any = {}) {
  switch (action.type) {
    case SET_PROJECTS:
      return {
        projects: action.projects
      };
    default:
      return state;
  }
}
