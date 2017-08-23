import * as React from 'react';
import {Content} from '../../components/Content/Content';

import './Projects.scss';

export class Projects extends React.Component<any, any> {
  render() {
    return (
      <Content>
        <div className="w3-container">
          <h1 className="center-align projects__text-description">Description</h1>
          <p className="left-align projects__text-description-text projects__top">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
            hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
            eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
            feugait nulla facilisi.
          </p>
        </div>

        <div className="w3-container projects__top projects__text-tasks">
          <h1 className="center-align projects__text-description">Tasks</h1>
          <div className="projects__top">
            <div className="w3-row">
              <div className="w3-col w3-container m4 l4">
                <p className="center-align text__decorator projects__text">
                  To do 6
                </p>
                <div className="column task__position">
                  <div className="post-module hover">
                    <div className="thumbnail">
                      <div className="date">
                        <div className="day">27</div>
                        <div className="month">Mar</div>
                      </div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"/>
                    </div>
                    <div className="post-content">
                      <div className="category">Photos</div>
                      <h1 className="title">City Lights in New York</h1>
                      <h2 className="sub_title">The city that never sleeps.</h2>
                      <p className="description">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
                      <div className="post-meta"><span className="timestamp"><i className="fa fa-clock-o"></i> 6 mins ago</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w3-col w3-container m4 l4">
                <p className="center-align text__decorator projects__text">
                  In progress 2
                </p>
                <div className="column task__position">
                  <div className="post-module hover">
                    <div className="thumbnail">
                      <div className="date">
                        <div className="day">27</div>
                        <div className="month">Mar</div>
                      </div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"/>
                    </div>
                    <div className="post-content">
                      <div className="category">Photos</div>
                      <h1 className="title">City Lights in New York</h1>
                      <h2 className="sub_title">The city that never sleeps.</h2>
                      <p className="description">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
                      <div className="post-meta"><span className="timestamp"><i className="fa fa-clock-o"></i> 6 mins ago</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w3-col w3-container m4 l4">
                <p className="center-align text__decorator projects__text">
                  Done 145
                </p>
                <div className="column task__position">
                  <div className="post-module hover">
                    <div className="thumbnail">
                      <div className="date">
                        <div className="day">27</div>
                        <div className="month">Mar</div>
                      </div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"/>
                    </div>
                    <div className="post-content">
                      <div className="category">Photos</div>
                      <h1 className="title">City Lights in New York</h1>
                      <h2 className="sub_title">The city that never sleeps.</h2>
                      <p className="description">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
                      <div className="post-meta"><span className="timestamp"><i className="fa fa-clock-o"></i> 6 mins ago</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    );
  }
}
