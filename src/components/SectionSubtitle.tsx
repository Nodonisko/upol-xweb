import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useFela } from 'react-fela';

import { colors } from '../theme';
import { Rule } from '../types';

const sectionSubtitleStyle: Rule = ({ align }) => ({
  textAlign: align,
  fontWeight: 600,
  fontSize: '18px',
  marginBottom: '25px',
  marginTop: 0,
  color: colors.orange,
});

const sectionSubtitleTextStyle = () => ({
  padding: '0 15px',
});

export const SectionSubtitle = ({ children, align = 'center', ...props }) => {
  const { css } = useFela({ align });

  return (
    <h3 className={css(sectionSubtitleStyle)}>
      <FontAwesomeIcon icon={faEllipsisH} />
      <span className={css(sectionSubtitleTextStyle)}>{children}</span>
      {align !== 'left' && <FontAwesomeIcon icon={faEllipsisH} />}
    </h3>
  );
};
