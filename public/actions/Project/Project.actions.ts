import transport from '../../service/Transport/Transoprt';
import {SET_PROJECTS, SET_CURRENT_PROJECTS} from '../../constants/Projects/Projects.constants';

export function setProjects(projects: Array<any>): any {
  return {
    type: SET_PROJECTS,
    projects
  };
}

export function setCurrentProjects(project: any): any {
  return {
    type: SET_CURRENT_PROJECTS,
    project
  };
}

export function getProjects(id: string): any {
  return transport.get(`/users/${id}/projects`);
}

export function getProjectUsers(id: string): any {
  return transport.get(`/projects/${id}/users`);
}
