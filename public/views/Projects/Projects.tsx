import * as React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import {Content} from '../../components/Content/Content';
import {Task} from '../../components/Task/Task';
import {togglePreloader} from '../../actions/PreLoader/PreLoader.actions';
import {getProjects, setCurrentProjects} from '../../actions/Project/Project.actions';

import './Projects.scss';

interface Props {
  isAuthenticated: boolean;
  project: any;
  getProjectsList: () => void;
}

class Projects extends React.Component<Props, any> {
  componentWillMount() {
    if (!this.props.isAuthenticated) {
      browserHistory.push('/');

      return;
    }

    this.props.getProjectsList();
  }

  render() {
    let {project}: any = this.props.project;

    project = typeof project[0] === 'object' ? project[0] : project;

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
                <p className='center-align text__decorator projects__text'>
                  To do 6
                </p>
                <Task
                  day='27'
                  month='Mar'
                  priority='Low'
                  title='City Lights in New York'
                  description='New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.'
                  path='/tasks'
                />
                <Task
                  day='27'
                  month='Mar'
                  priority='High'
                  title='City Lights in New York'
                  description='New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.'
                  path='/tasks'
                />
              </div>
              <div className='w3-col w3-container m4 l4 task__mobile-progress'>
                <p className='center-align text__decorator projects__text'>
                  In progress 2
                </p>
                <Task
                  day='27'
                  month='Mar'
                  priority='Medium'
                  title='City Lights in New York'
                  description='New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.'
                  path='/tasks'
                />
                <Task
                  day='27'
                  month='Mar'
                  priority='High'
                  title='City Lights in New York'
                  description='New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.'
                  path='/tasks'
                />
              </div>
              <div className='w3-col w3-container m4 l4 task__mobile-done'>
                <p className='center-align text__decorator projects__text'>
                  Done 145
                </p>
                <Task
                  day='27'
                  month='Mar'
                  priority='High'
                  title='City Lights in New York'
                  description='New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.'
                  path='/tasks'
                />
              </div>
            </div>
          </div>
        </div>
      </Content>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.authentication.isAuthenticated,
    project: state.project
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getProjectsList: async () => {
      dispatch(togglePreloader());

      const result = await getProjects();

      dispatch(setCurrentProjects(await result.json()));
      dispatch(togglePreloader());
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Projects as any);

