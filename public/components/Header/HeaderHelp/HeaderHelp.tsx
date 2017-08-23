import * as React from 'react';

export class HeaderHelp extends React.Component<any, any> {
  render() {
    return (
      <div className='header__wrapper__help'>
        <img className='header__help-img header__help-img-enter' src='../../static/images/enter_button.png'/>
        <p className='header__help-enter'>Select</p>
      </div>
    );
  }
}
