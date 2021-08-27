import React from 'react';
import { useFela } from 'react-fela';
import { breakpoint } from '../theme';
import { Rule } from '../types';

const TOTAL_COLUMNS = 12;
export const COL_GUTTER = 15;

type ColSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  md?: ColSize;
  sm?: ColSize;
  xs?: ColSize;
}

const colStyle: Rule = ({
  md,
  sm,
  xs,
}: {
  md?: ColSize;
  sm?: ColSize;
  xs?: ColSize;
}) => {
  const colMdWidth = `${(100 / TOTAL_COLUMNS) * md}%`;
  const colSmWidth = `${(100 / TOTAL_COLUMNS) * sm}%`;
  const colXsWidth = `${(100 / TOTAL_COLUMNS) * xs}%`;

  return {
    display: 'flex',
    padding: `0 ${COL_GUTTER}px`,
    [breakpoint.md]: {
      width: colMdWidth,
      flex: `0 0 ${colMdWidth}`,
    },
    [breakpoint.sm]: {
      width: colSmWidth,
      flex: `0 0 ${colSmWidth}`,
    },
    [breakpoint.xs]: {
      width: colXsWidth,
      flex: `0 0 ${colXsWidth}`,
    },
  };
};

export const Col = ({ children, className = '', ...props }: ColProps) => {
  const xs = props.xs ?? 12;
  const sm = props.sm ?? xs;
  const md = props.md ?? sm;

  const { css } = useFela({ xs, sm, md });

  return (
    <div className={`${css(colStyle)} ${className}`} {...props}>
      {children}
    </div>
  );
};
