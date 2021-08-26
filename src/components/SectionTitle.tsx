import React from 'react';
import { useFela } from 'react-fela';

import { colors, fontFamily } from '../theme';
import { Rule } from '../types';

const sectionTitleStyle: Rule = ({ color, align, customStyle }) => ({
  textAlign: align,
  fontWeight: 700,
  fontSize: '48px',
  marginBottom: '60px',
  marginTop: 0,
  color,
  fontFamily: fontFamily.roboto,
  ...customStyle,
});

export const SectionTitle = ({
  children,
  color = colors.titleBlack,
  align = 'center',
  customStyle = {},
  ...props
}) => {
  const { css } = useFela({ color, align, customStyle });

  return <h3 className={css(sectionTitleStyle)}>{children}</h3>;
};
