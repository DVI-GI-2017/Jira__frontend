import transport from '../../service/Transport/Transoprt';
import {SET_TASKS, SET_CURRENT_TASKS} from '../../constants/Tasks/Tasks.constants';

export function setTasks(tasks: Array<any>): any {
  return {
    type: SET_TASKS,
    tasks
  };
}

export function setCurrentTasks(task: any): any {
  return {
    type: SET_CURRENT_TASKS,
    task
  };
}

export function getTasks(id: string): any {
  return transport.get(`/project/${id}/tasks`);
}

export function getTask(filter: string): any {
  return transport.get(`/tasks/${filter}`);
}
