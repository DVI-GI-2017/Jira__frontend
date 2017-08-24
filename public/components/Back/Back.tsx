import * as React from 'react';
import {Link} from 'react-router';

import {Button} from '../Button/Button';

import './Back.scss';

interface Props {
  path: string;
}

export class Back extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className='button__back'>
        <Button
          text='BACK'
          isActive={ false }
          pathTo={this.props.path}
        />
      </div>
    );
  }
}
