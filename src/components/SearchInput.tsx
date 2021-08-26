import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useFela } from 'react-fela';
import { fontFamily } from '../theme';
import { Rule } from '../types';
import { Button } from './Button';

const inputStyle: Rule = () => ({
  width: '100%',
  height: '85px',
  padding: '15px 90px 15px 35px',
  display: 'block',
  border: 0,
  backgroundColor: 'white',
  fontSize: '20px',
  color: '#5b7076',
  fontWeight: 500,
  fontFamily: fontFamily.hind,
});

const inputContainerStyle = () => ({
  position: 'relative',
});

const buttonContainerStyle = () => ({
  position: 'absolute',
  right: '10px',
  top: '10px',
});

export const SearchInput = () => {
  const { css } = useFela();

  return (
    <div className={css(inputContainerStyle)}>
      <input placeholder="Search Courses" className={css(inputStyle)} />
      <div className={css(buttonContainerStyle)}>
        <Button
          size="xl"
          type="orange"
          icon={<FontAwesomeIcon icon={faSearch} />}
        />
      </div>
    </div>
  );
};
