import React from 'react';
import { useFela } from 'react-fela';
import { Rule } from '../types';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  customStyle?: Record<string, any>;
}

const containerStyle: Rule = ({ customStyle }) => ({
  width: '1170px',
  margin: '0 auto',
  ...customStyle,
});

export const Container = ({ customStyle, ...props }: ContainerProps) => {
  const { css } = useFela({ customStyle });

  return <div className={css(containerStyle)} {...props} />;
};
