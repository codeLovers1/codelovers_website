import React from 'react';
import classnames from 'classnames';
import logo from '../../logo.png';

const Logo = (props) => (
  <img src={logo} className={classnames(props.logoSpin, props.navLogo)} alt="logo" />
);

export { Logo };