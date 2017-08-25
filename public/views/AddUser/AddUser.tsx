import * as React from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';

import Background from '../../components/Background/Background';
import Form from '../../components/Form/Form';

import './AddUser.scss';

const signInFields = [{
  title: 'Title',
  name: 'title',
  type: 'text',
  description: 'Title is title',
  placeholder: 'Project1',
  error: ''
}, {
  title: 'Description',
  name: 'description',
  type: 'text',
  description: 'Description',
  placeholder: 'Top project ever!',
  error: ''
}];

interface Props {
  isAuthenticated: boolean;
  device?: boolean;
}

class AddUser extends React.Component<Props, void> {
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
              fields={ signInFields }
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

export default connect<{}, {}, Props>(mapStateToProps)(AddUser);
