import React from 'react';
import { useFela } from 'react-fela';

import logo from '../images/logoWhite.png';
import { breakpoint, fontFamily } from '../theme';
import { Rule } from '../types';

const logoStyle = () => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: '60px',
  [breakpoint.md]: {
    marginBottom: 0,
  },
});

const logoTextStyle: Rule = () => ({
  fontSize: '45px',
  lineHeight: '45px',
  marginLeft: '10px',
  fontFamily: fontFamily.hind,
  color: '#fff',
});

const logoBoldStyle = () => ({
  fontWeight: 900,
});

export const LogoWhite = () => {
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
