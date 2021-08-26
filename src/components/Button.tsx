import React, { ReactNode } from 'react';
import { useFela } from 'react-fela';
import { colors, fontFamily } from '../theme';
import { Rule } from '../types';

interface ButtonProps {
  type?: 'white' | 'orange' | 'grey';
  children?: ReactNode;
  icon?: ReactNode;
  size?: 'md' | 'xl';
}

const buttonTypeStyles = {
  white: {
    backgroundColor: 'white',
    color: colors.text,
    ':hover': {
      backgroundColor: colors.orange,
      color: 'white',
      '> .icon': {
        color: 'white',
      },
    },
    '> .icon': {
      color: colors.orange,
    },
  },
  orange: {
    backgroundColor: colors.orange,
    color: 'white',
    ':hover': {
      backgroundColor: 'rgb(234, 54, 39)',
      color: 'white',
      '> .icon': {
        color: 'white',
      },
    },
    '> .icon': {
      color: 'white',
    },
  },
  grey: {
    backgroundColor: '#eaf4f7',
    color: colors.text,
    ':hover': {
      backgroundColor: colors.orange,
      color: 'white',
      '> .icon': {
        color: 'white',
      },
    },
    '> .icon': {
      color: colors.orange,
    },
  },
};

const buttonSizeStyle = {
  md: {
    height: '50px',
    padding: '15px 20px',
    fontSize: '14px',
  },
  xl: {
    height: '65px',
    padding: '18px 20px',
    fontSize: '18px',
  },
};

const buttonStyle: Rule = ({ type, size, width }) => ({
  cursor: 'pointer',
  textTransform: 'uppercase',
  fontWeight: 700,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: fontFamily.roboto,
  transitionProperty: 'background-color, color',
  transitionDuration: '300ms',
  color: colors.text,
  width,
  ...buttonTypeStyles[type],
  ...buttonSizeStyle[size],
});

const iconStyle: Rule = ({ children, icon }) => {
  const marginRight = children && icon ? '7px' : undefined;

  return { marginRight, display: 'flex', justifyContent: 'center' };
};

export const Button = ({
  type = 'white',
  children,
  icon,
  size = 'md',
  width = 'auto',
}: ButtonProps) => {
  const { css } = useFela({ type, children, icon, size, width });

  return (
    <div role="button" className={css(buttonStyle)}>
      {icon && <div className={`icon ${css(iconStyle)}`}>{icon}</div>}
      {children && <div>{children}</div>}
    </div>
  );
};
