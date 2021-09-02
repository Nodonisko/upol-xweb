import React from 'react';
import { useFela } from 'react-fela';
import { fontFamily } from '../theme';
import { Rule } from '../types';

const subpageHeaderStyle: Rule = () => ({
  backgroundImage: `url('https://picsum.photos/2000/800')`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  padding: '180px 30px',
  textAlign: 'center',
  color: 'white',
});

const titleStyle: Rule = () => ({
  fontWeight: 700,
  fontSize: '110px',
  margin: 0,
  fontFamily: fontFamily.roboto,
});

const subtitleStyle: Rule = () => ({
  fontWeight: 500,
  fontSize: '24px',
  marginBottom: 0,
});

export const SubpageHeader = ({ title, subtitle }) => {
  const { css } = useFela();

  return (
    <div className={css(subpageHeaderStyle)}>
      <title>{title}</title>
      <h1 className={css(titleStyle)}>{title}</h1>
      <h2 className={css(subtitleStyle)}>{subtitle}</h2>
    </div>
  );
};
