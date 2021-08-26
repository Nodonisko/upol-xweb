import React from 'react';
import { useFela } from 'react-fela';

import logo from '../images/logo.png';
import { fontFamily } from '../theme';
import { Rule } from '../types';

const logoStyle = () => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const logoTextStyle: Rule = () => ({
  fontSize: '45px',
  lineHeight: '45px',
  marginLeft: '10px',
  fontFamily: fontFamily.hind,
});

const logoBoldStyle = () => ({
  fontWeight: 900,
});

export const Logo = () => {
  const { css } = useFela();

  return (
    <div className={css(logoStyle)}>
      <img src={logo} alt="Logo" />
      <div className={css(logoTextStyle)}>
        <span className={css(logoBoldStyle)}>Edu</span>
        <span>Plus</span>
      </div>
    </div>
  );
};
