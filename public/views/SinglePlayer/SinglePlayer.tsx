import * as React from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';

import {SINGLEPLAYER} from '../../constants/Game/Game';
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

import musicService from '../../service/MusicService/MusicService';
import GameManager from '../../game/Manager/GameManager/GameManager.js';

import './SinglePlayer.scss';

const header = [{
  title: '#'
}, {
  title: 'Username'
}, {
  title: 'Score'
}];

interface Props {
  isAuthenticated: boolean;
  device: boolean;
  user?: string;
}

class SinglePlayer extends React.Component<Props, any> {
  _users: Array<Array<string>>;

  constructor(props: Props) {
    super(props);

    this._users = [
      [this.props.user, '0']
    ];
  }

  componentWillMount() {
    if (!this.props.isAuthenticated) {
      browserHistory.push('/');
    }
  }

  componentDidMount() {
    musicService.stopBackground();
    new GameManager(SINGLEPLAYER, browserHistory.push.bind(this, '/game'));
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
              <div className='gameTable__wrapper'>
                <div className='gameTable__wrapper__table'>
                  <GameTable header={ header } content={ this._users }/>
                </div>
              </div>

              <ShootFootage />
              <Hurt />
              <EndGameTheme text='Singleplayer'/>
              <StartGameTheme />
            </div>
            <GameMenu text='Singleplayer'/>
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

export default connect(mapStateToProps)(SinglePlayer as any);
