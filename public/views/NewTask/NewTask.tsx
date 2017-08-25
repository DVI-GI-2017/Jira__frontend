import * as React from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';

import Background from '../../components/Background/Background';
import Form from '../../components/Form/Form';
import {togglePreloader} from '../../actions/PreLoader/PreLoader.actions';

import './NewTask.scss';

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
  device?: boolean;
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
    const {isAuthenticated, device} = this.props;
    const classes = device ? 'registration' : 'mobile__registration';

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
    device: state.device
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getProjectsList: async (userId: string) => {
      // dispatch(togglePreloader());
      //
      // if (userId) {
      //   let projects = await getUsersInProject(userId);
      //
      //   if (+projects.status === 200) {
      //     projects = await projects.json();
      //     const tasks = await getTasks(projects[0]._id);
      //
      //     dispatch(setTasks(await tasks.json()));
      //   } else {
      //     console.log(await projects.text());
      //   }
      // }
      //
      // dispatch(togglePreloader());
    }
  }
};

export default connect<{}, {}, Props>(mapStateToProps, mapDispatchToProps)(NewTask);
