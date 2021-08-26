import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useFela } from 'react-fela';
import { colors, fontFamily } from '../theme';
import { Rule } from '../types';

const factStyle: Rule = () => ({
  boxShadow: '0px 10px 30px rgba(234, 244, 247, 0.9)',
  backgroundColor: '#ffffff',
  padding: '40px 25px 40px 110px',
  position: 'relative',
  flex: 1,
});

const factIconStyle: Rule = () => ({
  position: 'absolute',
  color: colors.orange,
  fontSize: '50px',
  left: '25px',
  lineHeight: 0,
  width: '65px',
  textAlign: 'center',
});

const factTitleStyle: Rule = () => ({
  fontSize: '35px',
  lineHeight: '35px',
  fontWeight: 700,
  fontFamily: fontFamily.roboto,
  color: colors.orange,
});

const factSubtitleStyle: Rule = () => ({
  fontSize: '15px',
  fontWeight: 500,
  fontFamily: fontFamily.hind,
  color: colors.textGrey,
});

export const Fact = ({ icon, title, subtitle }) => {
  const { css } = useFela();

  return (
    <div className={css(factStyle)}>
      <div className={css(factIconStyle)}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className={css(factTitleStyle)}>{title}</div>
      <div className={css(factSubtitleStyle)}>{subtitle}</div>
    </div>
  );
};
