/* eslint-disable jsx-a11y/anchor-is-valid */
import { faBook, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useFela } from 'react-fela';

import { getRandomNumber } from '../getRandom';
import { colors, fontFamily } from '../theme';
import { Rule } from '../types';
import { Tag } from './Tag';

interface InstructorCardProps {
  icon: any;
}

const inputContainerStyle: Rule = () => ({
  position: 'relative',
  width: '100%',
  marginBottom: '10px',
});

const inputStyle: Rule = () => ({
  width: '100%',
  backgroundColor: '#fff',
  border: '1px solid #dedede',
  padding: '23px 25px',
  fontFamily: fontFamily.roboto,
  fontSize: '15px',
  color: '#062a35',
});

const inputIconStyle: Rule = () => ({
  position: 'absolute',
  right: '23px',
  top: '25px',
  fontSize: '16px',
});

export const Input = ({
  icon,
  as: InputComponent = 'input',
  ...props
}: InstructorCardProps) => {
  const { css } = useFela();

  return (
    <div className={css(inputContainerStyle)}>
      <InputComponent className={css(inputStyle)} {...props} />
      {icon && (
        <FontAwesomeIcon
          color={colors.orange}
          icon={icon}
          className={css(inputIconStyle)}
        />
      )}
    </div>
  );
};
