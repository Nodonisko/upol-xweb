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
  title: string;
  description: string;
}

const instructorCategoryCardStyle: Rule = () => ({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  textDecoration: 'none',
  marginBottom: '30px',
});

const instructorImageStyle: Rule = () => ({
  width: '100%',
  height: '200px',
  '> img': {
    maxHeight: '100%',
    width: '100%',
  },
});

const instructorDescriptionStyle: Rule = () => ({
  border: '1px solid #d7d7d7',
  borderTop: 0,
  padding: '30px',
  backgroundColor: 'white',
});

const instructorTitleStyle: Rule = () => ({
  fontFamily: fontFamily.roboto,
  fontSize: '22px',
  fontWeight: 700,
  margin: 0,
  color: colors.text,
  ':hover': {
    color: colors.orange,
  },
});

const instructorDescriptionContentStyle: Rule = () => ({
  color: colors.textLightGrey,
  fontSize: '15px',
});

const instructorMetaStyle: Rule = () => ({
  display: 'flex',
  color: colors.textLightGrey,
  borderTop: `1px solid #d7d7d7`,
  paddingTop: '20px',
});

export const InstructorCard = ({
  title,
  description,
  ...props
}: InstructorCardProps) => {
  const { css } = useFela();

  return (
    <a className={css(instructorCategoryCardStyle)} href="#">
      <div className={css(instructorImageStyle)}>
        <img
          src={`https://loremflickr.com/270/${getRandomNumber(200, 270)}`}
          alt="instructor kitten"
        />
      </div>
      <div className={css(instructorDescriptionStyle)}>
        <h4 className={css(instructorTitleStyle)}>{title}</h4>
        <p className={css(instructorDescriptionContentStyle)}>{description}</p>

        <div className={css(instructorMetaStyle)}>
          <div>
            <FontAwesomeIcon icon={faBook} color={colors.orange} />{' '}
            {getRandomNumber(10, 500)}+ Courses
          </div>
        </div>
      </div>
    </a>
  );
};
