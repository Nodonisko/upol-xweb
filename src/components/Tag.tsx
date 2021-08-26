import React from 'react';
import { useFela } from 'react-fela';
import { colors, fontFamily } from '../theme';
import { Rule } from '../types';

interface TagProps {
  children: React.ReactNode;
}

const TagStyle: Rule = ({ color }) => ({
  height: '25px',
  lineHeight: '25px',
  borderRadius: '12px',
  fontFamily: fontFamily.roboto,
  fontWeight: 500,
  fontSize: '13px',
  color: 'white',
  backgroundColor: color,
  padding: '0 15px',
  textTransform: 'uppercase',
  display: 'inline-block',
});

export const Tag = ({
  children,
  color = colors.orange,
  ...props
}: TagProps) => {
  const { css } = useFela({ color });

  return <div className={css(TagStyle)}>{children}</div>;
};
