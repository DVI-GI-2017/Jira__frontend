import * as React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import {Button} from '../../components/Button/Button';
import {checkAuthentication} from '../../actions/User/User.actions';
import {togglePreloader} from '../../actions/PreLoader/PreLoader.actions';

import './Home.scss';

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

    // if (this.props.isAuthenticated) {
    //   browserHistory.push('/projects');
    // }
  }

  render() {
    const {device} = this.props;
    const buttons: Array<any> = this._setButtons();
    const classes = `wrapper__form ${device ? '' : 'mobile'}`;

    const buttonsRender: any = buttons.map((item, index) => {
      return (
        <div key={index}>
          <Button
            text={item.text}
            isActive={item.isActive}
            pathTo={item.url}/>
        </div>
      );
    });

    return (
      <div className={classes}>
        <div className='wrapper__main__form'>
          <div className='main__form'>
            {buttonsRender}
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
    device: state.device
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    checkAuth: async () => {
      dispatch(togglePreloader());

      const result = await checkAuthentication();
      console.log(result);

      dispatch(togglePreloader());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home as any);
