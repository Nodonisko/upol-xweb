import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useFela } from 'react-fela';
import { colors, fontFamily } from '../theme';
import { Rule } from '../types';

const factStyle: Rule = () => ({
  backgroundColor: '#ffffff',
  position: 'relative',
  flex: 1,
  width: '100%',
  paddingLeft: '60px',
});

const factIconStyle: Rule = () => ({
  position: 'absolute',
  color: colors.orange,
  fontSize: '25px',
  left: '0',
  lineHeight: 0,
  width: '65px',
  textAlign: 'center',
});

const factTitleStyle: Rule = () => ({
  fontSize: '18px',
  lineHeight: '28px',
  fontWeight: 700,
});

const factSubtitleStyle: Rule = () => ({
  fontSize: '15px',
  fontWeight: 500,
  fontFamily: fontFamily.hind,
  color: colors.textGrey,
});

export const EducationFact = ({ icon, title, subtitle, ...props }) => {
  const { css } = useFela();

  return (
    <div className={css(factStyle)} {...props}>
      <div className={css(factIconStyle)}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className={css(factTitleStyle)}>{title}</div>
      <div className={css(factSubtitleStyle)}>{subtitle}</div>
    </div>
  );
};
