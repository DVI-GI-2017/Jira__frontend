import * as React from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';

import Background from '../../components/Background/Background';
import Form from '../../components/Form/Form';
import {togglePreloader} from '../../actions/PreLoader/PreLoader.actions';

import './NewTask.scss';
import {getProjectUsers} from '../../actions/Project/Project.actions';

const signTopFields = [{
  title: 'Title',
  name: 'title',
  type: 'text',
  description: 'Title is title',
  placeholder: 'Task 1',
  error: ''
}, {
  title: 'Description',
  name: 'description',
  type: 'text',
  description: 'Description',
  placeholder: 'Top task ever!',
  error: ''
}, {
  title: 'Project',
  type: 'select',
  options: [{
    title: 'akjnasdfnj'
  }, {
    title: 'weqrqewr'
  }, {
    title: 'xcvkvkzx'
  }]
}];

interface Props {
  isAuthenticated: boolean;
  project: any;
  device?: boolean;
  getUsersList: (string) => void;
}

class NewTask extends React.Component<Props, void> {
  constructor() {
    super();

    this.setEscape();
  }

  setEscape() {
    document.addEventListener('keydown', (event: any) => {
      switch (event.keyCode) {
        case 27:
          browserHistory.push('/');
          break;
        default:
          break;
      }
    });
  }

  render() {
    const {isAuthenticated, device, project} = this.props;
    const classes = device ? 'registration' : 'mobile__registration';

    console.log(project);

    if (project) {
      this.props.getUsersList(project._id);
    }

    return (
      <div className='wrapper__registration'>
        <Background closed={ true }/>
        { !isAuthenticated ?
          browserHistory.push('/')
          : <div className={ classes }>
            <Form
              fields={ signTopFields }
              control='Create project'
            />
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.authentication.isAuthenticated,
    project: state.project.project,
    device: state.device
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUsersList: async (projectId: string) => {
      dispatch(togglePreloader());

      if (projectId) {
        let users = await getProjectUsers(projectId);

        if (+users.status === 200) {
          users = await users.json();

          console.log(users);

          // dispatch(setUsers(await users.json()));
        } else {
          console.log(await users.text());
        }
      }

      dispatch(togglePreloader());
    }
  }
};

export default connect<{}, {}, Props>(mapStateToProps, mapDispatchToProps)(NewTask);
