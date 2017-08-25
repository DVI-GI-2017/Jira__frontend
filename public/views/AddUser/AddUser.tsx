import * as React from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';

import Background from '../../components/Background/Background';
import Form from '../../components/Form/Form';
import {togglePreloader} from '../../actions/PreLoader/PreLoader.actions';
import {getUsers, setUsers} from '../../actions/Users/Users.actions';

import './AddUser.scss';

const signTopFields = [{
  title: 'User',
  type: 'select',
  options: []
}];

interface Props {
  isAuthenticated: boolean;
  project: any;
  users: any;
  device?: boolean;
  getUsersList: () => void;
  getUsers: (any) => void;
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

  private kostyl() {
    const sel: any = document.getElementById('soflow-color');

    this.props.users.map((item: any, index: number) => {
      const op: any = document.createElement('option');
      op.text = item.email;

      sel.add(op);

      return item;
    })
  }

  componentDidMount() {
    this.props.getUsers(this.kostyl.bind(this));
  }

  render() {
    const {isAuthenticated, device, users} = this.props;
    const classes = device ? 'registration' : 'mobile__registration';

    console.log(users);
    if (users.length === 0) {
      this.props.getUsersList();
    }

    signTopFields[0] = {
      title: 'Assignee',
      type: 'select',
      options: users.map((item: any) => {
        return {
          title: item.email
        }
      })
    };

    console.log(signTopFields);

    return (
      <div className='wrapper__registration'>
        <Background closed={true}/>
        {!isAuthenticated ?
          browserHistory.push('/')
          : <div className={classes}>
            <Form
              fields={signTopFields}
              control='Add user'
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
    users: state.users.users,
    device: state.device
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUsersList: async () => {
      dispatch(togglePreloader());

      let users = await getUsers();
      const top = await users.json();
      console.log(top);

      dispatch(setUsers(top));
      dispatch(togglePreloader());
    },

    getUsers: async (callback: any) => {
      await setTimeout(() => callback(), 200);
    }
  }
};

export default connect<{}, {}, Props>(mapStateToProps, mapDispatchToProps)(AddUser);
