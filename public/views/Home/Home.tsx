import * as React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import {Button} from '../../components/Button/Button';
import {checkAuthentication, setCurrentUser, setScore} from '../../actions/User/User.actions';
import {setActive} from '../../actions/Buttons/Buttons.actions';
import {togglePreloader} from '../../actions/PreLoader/PreLoader.actions';

import './Home.scss';

const auth = localStorage.token;

const urls = auth ? [
  '/game',
  '/scoreboard',
  '/about'
] : [
  '/signin',
  '/signup'
];

// Error test:
// click enter -> esc -> don't work

interface Props {
  isAuthenticated: boolean;
  user?: string;
  device: boolean;
  setActive: (button1: any, button2: any, button3: any, current: any) => void;
  button1: boolean;
  button2: boolean;
  button3?: boolean;
  current: boolean;
  checkAuth: () => void;
}

class Home extends React.Component<Props, void> {
  componentWillMount() {
    this.props.checkAuth();

    if (!this.props.isAuthenticated) {
      browserHistory.push('/projects');
    }
  }

  render() {
    const {device} = this.props;
    const buttons: Array<any> = this._setButtons();
    const classes = `wrapper__form ${device ? '' : 'mobile'}`;

    const buttonsRender: any = buttons.map((item, index) => {
      return (
        <div key={ index }>
          <Button
            text={ item.text }
            isActive={ item.isActive }
            pathTo={item.url}/>
        </div>
      );
    });

    return (
      <div className={ classes }>
        <div className='wrapper__main__form'>
          <div className='main__form'>
            { buttonsRender }
          </div>
        </div>
      </div>
    );
  }

  _setButtons(): Array<any> {
    return [
      {
        number: 1,
        text: 'SIGN IN',
        url: '/signin',
        isActive: this.props.button1
      },
      {
        number: 2,
        text: 'REGISTER',
        url: '/signup',
        isActive: this.props.button2
      }
    ];
  }
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.authentication.isAuthenticated,
    user: state.authentication.user,
    current: state.buttons[0].current,
    button1: state.buttons[1].button,
    button2: state.buttons[2].button,
    button3: state.buttons[3].button,
    device: state.device
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setActive: (button1: boolean,
                button2: boolean,
                button3: boolean,
                current: boolean) => {
      dispatch(setActive(button1, button2, button3, current));
    },

    checkAuth: () => {
      dispatch(togglePreloader());

      checkAuthentication()
        .then((response: any) => {
          return +response.status === 200 ? {
            data: response.json(),
            isLogin: true
          } : {
            isLogin: false
          };
        })
        .then((data: any) => {
          if (data.isLogin) {
            data.data
              .then((user: any) => {
                localStorage.setItem('token', user.login);
                localStorage.setItem('id', user.id);
                dispatch(setCurrentUser(user.login));
                dispatch(togglePreloader());
              });
          } else {
            localStorage.removeItem('token');
            localStorage.removeItem('id');
            dispatch(setCurrentUser(''));
            dispatch(togglePreloader());
          }
        });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home as any);
