import * as React from 'react';
import {Linked} from '../../Linked/Linked';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';

import {setCurrentUser} from '../../../actions/User/User.actions';

interface Props {
  isAuthenticated: boolean;
  user?: string;
  logoutUser: () => void;
}

class HeaderNav extends React.Component<Props, any> {
  render() {
    return (
      <div className='header__wrapper__help'>
        <ul className='ul__class'>
          <li className='li__class'><Linked pathTo='/projects'><p>Projects</p></Linked></li>
          <li className='li__class'><Linked pathTo='/tasks'><p>Tasks</p></Linked></li>
          <li className='li__class' onClick={this.logout.bind(this, this.props.logoutUser)}><p>Logout</p></li>
        </ul>
      </div>
    );
  }

  public logout(logout: any) {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      logout();
    }

    browserHistory.push('/');
  }
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.authentication.isAuthenticated,
    user: state.authentication.user,
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logoutUser: () => {
      dispatch(setCurrentUser(''));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav as any);

