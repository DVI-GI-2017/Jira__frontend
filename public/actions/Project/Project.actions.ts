import transport from '../../service/Transport/Transoprt';
import {SET_PROJECTS} from '../../constants/Projects/Projects.constants';

export function setProjects(projects: Array<any>): any {
  return {
    type: SET_PROJECTS,
    projects
  };
}

export function getProjects(): any {
  return transport.get('/projects');
}

export function checkAuthentication(): any {
  return transport.get('/cur-user');
}

export function logoutUser(): any {
  return transport.post('/logout');
}
