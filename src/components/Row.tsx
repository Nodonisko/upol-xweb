import React from 'react';
import { useFela } from 'react-fela';
import { Rule } from '../types';
import { COL_GUTTER } from './Col';

const rowStyle: Rule = () => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginLeft: `-${COL_GUTTER}px`,
  marginRight: `-${COL_GUTTER}px`,
  flex: 1,
});

export const Row = ({
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { css } = useFela();

  return <div className={`${css(rowStyle)} ${className}`} {...props} />;
};
