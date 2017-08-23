import * as React from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';

import {MULTIPLAYER} from '../../constants/Game/Game';
import {Mobile} from '../Mobile/Mobile';
import Background from '../../components/Background/Background';
import GameTable from '../../components/Game/GameTable/GameTable';
import {Instructions} from '../../components/Instructions/Instructions';
import {Aim} from '../../components/Game/Aim/Aim';
import {Health} from '../../components/Game/Health/Health';
import {GameShadow} from '../../components/Game/GameShadow/GameShadow';
import {Weapon} from '../../components/Game/Weapon/Weapon';
import {EndGameTheme} from '../../components/Game/EndGameTheme/EndGameTheme';
import {Hurt} from '../../components/Game/Hurt/Hurt';
import {StartGameTheme} from '../../components/Game/StartGameTheme/StartGameTheme';
import {GameMenu} from '../../components/Game/GameMenu/GameMenu';
import {ShootFootage} from '../../components/Game/ShootFootage/ShootFootage';
import {Information} from '../../components/Game/Information/Information';
import {Time} from '../../components/Game/Time/Time';

import musicService from '../../service/MusicService/MusicService';
import GameManager from '../../game/Manager/GameManager/GameManager.js';

const header = [{
  title: '#'
}, {
  title: 'Username'
}, {
  title: 'Score'
}, {
  title: 'Death'
}];

interface Props {
  isAuthenticated: boolean;
  device: boolean;
  user?: string;
}

class MultiPlayer extends React.Component<Props, any> {
  _users: Array<Array<string>>;

  constructor(props: Props) {
    super(props);

    this._users = [
      []
    ];
  }

  componentWillMount() {
    if (!this.props.isAuthenticated) {
      browserHistory.push('/');
    } else {
      setTimeout(() => {
        musicService.stopBackground();
      }, 300);
    }
  }

  componentDidMount() {
    musicService.stopBackground();
    new GameManager(MULTIPLAYER, browserHistory.push.bind(this, '/game'));
  }

  render() {
    const {device} = this.props;

    return (
      <div>
        { device ?
          <div>
            <Instructions />
            <div className='wrapper__game'>
              <Aim />
              <Health />
              <GameShadow />
              <Weapon />
              <Time />
              <div className='gameTable__wrapper'>
                <div className='gameTable__wrapper__table'>
                  <GameTable header={ header } content={ this._users }/>
                </div>
              </div>

              <ShootFootage />
              <Hurt />
              <EndGameTheme text='Multiplayer'/>
              <StartGameTheme />
              <Information text='' isMini={ false } type='connect'/>
              <Information text='Killed' isMini={ false } type='kill'/>
            </div>
            <GameMenu text='Multiplayer'/>
          </div>
          :
          <div className='wrapper__mobile'>
            <Background closed={ false }/>
            <Mobile />
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.authentication.isAuthenticated,
    user: state.authentication.user,
    device: state.device,
  }
};

export default connect(mapStateToProps)(MultiPlayer as any);
