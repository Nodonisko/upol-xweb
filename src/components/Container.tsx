import React from 'react';
import { useFela } from 'react-fela';
import { breakpoint } from '../theme';
import { Rule } from '../types';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  customStyle?: Record<string, any>;
}

const containerStyle: Rule = ({ customStyle }) => ({
  margin: '0 auto',
  ...customStyle,
  [breakpoint.md]: { width: '1170px' },
  [breakpoint.xs]: { padding: '0 15px' },
  [breakpoint.sm]: { padding: '0 30px' },
});

export const Container = ({ customStyle, ...props }: ContainerProps) => {
  const { css } = useFela({ customStyle });

  return <div className={css(containerStyle)} {...props} />;
};
