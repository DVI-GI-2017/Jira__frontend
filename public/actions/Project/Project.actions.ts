import transport from '../../service/Transport/Transoprt';

export function getProjects(data: any): any {
  return transport.get('/projects');
}

export function checkAuthentication(): any {
  return transport.get('/cur-user');
}

export function logoutUser(): any {
  return transport.post('/logout');
}