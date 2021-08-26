import React from 'react';
import { useFela } from 'react-fela';
import { Rule } from '../types';

const TOTAL_COLUMNS = 12;
export const COL_GUTTER = 15;

type ColSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  md: ColSize;
}

const colStyle: Rule = ({ md }: { md: ColSize }) => {
  const colWidth = `${(100 / TOTAL_COLUMNS) * md}%`;

  return {
    width: colWidth,
    flex: `0 0 ${colWidth}`,
    display: 'flex',
    padding: `0 ${COL_GUTTER}px`,
  };
};

export const Col = ({ md, children, className = '', ...props }: ColProps) => {
  const { css } = useFela({ md });

  return (
    <div className={`${css(colStyle)} ${className}`} {...props}>
      {children}
    </div>
  );
};
