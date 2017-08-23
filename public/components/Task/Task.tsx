import * as React from 'react';

import './Task.scss';

export class Task extends React.Component<any, any> {
  render() {
    return (
      <div className="column task__position">
        <div className="post-module hover">
          <div className="thumbnail">
            <div className="date">
              <div className="day">27</div>
              <div className="month">Mar</div>
            </div>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"/>
          </div>
          <div className="post-content">
            <div className="category">High</div>
            <h1 className="title">City Lights in New York</h1>
            <h2 className="sub_title">The city that never sleeps.</h2>
            <p className="description">New York, the largest city in the U.S., is an architectural marvel with plenty of
              historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
            <div className="post-meta"><span className="timestamp"><i className="fa fa-clock-o"></i> 6 mins ago</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
