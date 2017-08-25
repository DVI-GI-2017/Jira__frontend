import * as React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import {Content} from '../../components/Content/Content';
import {Task} from '../../components/Task/Task';
import {togglePreloader} from '../../actions/PreLoader/PreLoader.actions';
import {getProjects, setCurrentProjects} from '../../actions/Project/Project.actions';
import {getTasks, setTasks} from '../../actions/Tasks/Tasks.actions';

import './Projects.scss';

interface Props {
  isAuthenticated: boolean;
  project: any;
  user: any;
  tasks: Array<any>;
  getProjectsList: (string) => void;
  firstColumnTasks: Array<any>;
  secondColumnTasks: Array<any>;
  thirdColumnTasks: Array<any>;
}

class Projects extends React.Component<Props, any> {
  private firstColumnTasks: Array<any> = [];
  private secondColumnTasks: Array<any> = [];
  private thirdColumnTasks: Array<any> = [];

  componentWillMount() {
    if (!this.props.isAuthenticated) {
      browserHistory.push('/');

      return;
    }

    this.props.getProjectsList(this.props.user.data._id);
  }

  render() {
    let {project, tasks}: any = this.props;
    console.log(tasks);

    project = typeof project[0] === 'object' ? project[0] : project;


    this.setupTasks(tasks);

    return (
      <Content>
        <div className='w3-container'>
          <h1 className='center-align projects__text-title'>{project.title}</h1>
        </div>
        <div className='w3-container'>
          <h1 className='center-align projects__text-description'>Description</h1>
          <p className='left-align projects__text-description-text projects__top'>
            {project.description}
          </p>
        </div>
        <div className='w3-container projects__top projects__text-tasks'>
          <h1 className='center-align projects__text-description'>Tasks</h1>
          <div className='projects__top'>
            <div className='w3-row'>
              <div className='w3-col w3-container m4 l4'>
                {this.firstColumnTasks}
              </div>
              <div className='w3-col w3-container m4 l4 task__mobile-progress'>
                {this.secondColumnTasks}
              </div>
              <div className='w3-col w3-container m4 l4 task__mobile-done'>
                {this.thirdColumnTasks}
              </div>
            </div>
          </div>
        </div>
      </Content>
    );
  }

  private setupTasks(tasks: Array<any>): any {
    this.firstColumnTasks = [];
    this.secondColumnTasks = [];
    this.thirdColumnTasks = [];

    tasks.map((item, index) => {
      switch (index % 3) {
        case 0:
          this.firstColumnTasks.push((
              <Task
                day='27'
                month='Mar'
                priority={item.labels ? item.labels[0] : 'High'}
                title={item.title}
                description={item.description}
                path={`/tasks${item._id}`}
                initiator={item.initiator_id.length > 16 ? `${item.initiator_id.slice(0, 16)}...` : item.initiator_id}
                key={index}
              />
            ));
          break;
        case 1:
          this.secondColumnTasks.push((
            <Task
              day='27'
              month='Mar'
              priority={item.labels ? item.labels[0] : 'High'}
              title={item.title}
              description={item.description}
              path={`/tasks${item._id}`}
              initiator={item.initiator_id.length > 16 ? `${item.initiator_id.slice(0, 16)}...` : item.initiator_id}
              key={index}
            />
          ));
          break;
        case 2:
          this.thirdColumnTasks.push((
            <Task
              day='27'
              month='Mar'
              priority={item.labels ? item.labels[0] : 'High'}
              title={item.title}
              description={item.description}
              path={`/tasks${item._id}`}
              initiator={item.initiator_id.length > 16 ? `${item.initiator_id.slice(0, 16)}...` : item.initiator_id}
              key={index}
            />
          ));
      }
    });

    return {
      firstColumnTasks: this.firstColumnTasks,
      secondColumnTasks: this.secondColumnTasks,
      thirdColumnTasks: this.thirdColumnTasks
    }
  }
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.authentication.isAuthenticated,
    user: state.authentication.user,
    project: state.project.project,
    tasks: state.tasks.tasks
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getProjectsList: async (userId: string) => {
      dispatch(togglePreloader());

      if (userId) {
        let projects = await getProjects(userId);

        if (+projects.status === 200) {
          projects = await projects.json();
          const tasks = await getTasks(projects[0]._id);

          dispatch(setTasks(await tasks.json()));
        } else {
          console.log(await projects.text());
        }
      }

      dispatch(togglePreloader());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects as any);

