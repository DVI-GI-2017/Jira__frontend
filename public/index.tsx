import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';

import * as RoutesMap from './service/RoutesMap/RoutesMap';
import store from './store/Store';

import MainTemplate from './templates/MainTemplate/MainTemplate';
import Home from './views/Home/Home';
import SignIn from './views/SignIn/SignIn';
import SignUp from './views/SignUp/SignUp';
import {Error} from './views/Error/Error';
import Projects from './views/Projects/Projects';
import NewProject from './views/NewProject/NewProject';

import {setCurrentUser} from './actions/User/User.actions';
import {setDevice} from './actions/Mobile/Mobile.actions';
import {startServiceWorker} from './service/ServiceWorker/ServiceWorker';
import Device from './service/Device/Device';

import './static/css/reset.scss';
import './static/css/fonts.scss';
import './static/css/main.scss';

if (localStorage.token) {
  store.dispatch(setCurrentUser({
    token: localStorage.token,
    data: JSON.parse(localStorage.user),
  }));
}

store.dispatch(setDevice(new Device().isDesktop()));

// startServiceWorker();

const App = () => (
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path={ RoutesMap.HOME } component={ MainTemplate as any }>
        <IndexRoute component={ Home }/>
        <Route path={ RoutesMap.SIGNIN } component={ SignIn as any }/>
        <Route path={ RoutesMap.SIGNUP } component={ SignUp as any }/>
        <Route path={ RoutesMap.PROJECTS } component={ Projects as any }/>
        <Route path={ RoutesMap.NEW_PROJECT } component={ NewProject as any }/>
        <Route path='*' component={ Error as any }/>
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
