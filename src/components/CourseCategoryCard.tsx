import { faBook, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useFela } from 'react-fela';

import { getRandomNumber } from '../getRandom';
import { colors, fontFamily } from '../theme';
import { Rule } from '../types';
import { Tag } from './Tag';

interface CourseCategoryCardProps {
  title: string;
  description: string;
}

const courseCategoryCardStyle: Rule = () => ({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  textDecoration: 'none',
  marginBottom: '30px',
});

const courseImageStyle: Rule = () => ({
  width: '100%',
  height: '200px',
  '> img': {
    maxHeight: '100%',
    width: '100%',
  },
});

const courseDescriptionStyle: Rule = () => ({
  border: '1px solid #d7d7d7',
  borderTop: 0,
  padding: '30px',
});

const courseTitleStyle: Rule = () => ({
  fontFamily: fontFamily.roboto,
  fontSize: '22px',
  fontWeight: 700,
  margin: 0,
  color: colors.text,
  ':hover': {
    color: colors.orange,
  },
});

const courseDescriptionContentStyle: Rule = () => ({
  color: colors.textLightGrey,
  fontSize: '15px',
});

const courseMetaStyle: Rule = () => ({
  display: 'flex',
  color: colors.textLightGrey,
});

const courseNumber: Rule = () => ({
  marginLeft: '23px',
});

export const CourseCategoryCard = ({
  title,
  description,
  ...props
}: CourseCategoryCardProps) => {
  const { css } = useFela();

  return (
    <a className={css(courseCategoryCardStyle)} href="#">
      <div className={css(courseImageStyle)}>
        <img
          src={`https://loremflickr.com/270/${getRandomNumber(200, 270)}`}
          alt="course kitten"
        />
      </div>
      <div className={css(courseDescriptionStyle)}>
        <h4 className={css(courseTitleStyle)}>{title}</h4>
        <p className={css(courseDescriptionContentStyle)}>{description}</p>

        <div className={css(courseMetaStyle)}>
          <div>
            <FontAwesomeIcon icon={faUsers} color={colors.orange} />{' '}
            {Math.floor(Math.random() * 1000)}
          </div>
          <div className={css(courseNumber)}>
            <FontAwesomeIcon icon={faBook} color={colors.orange} />{' '}
            {Math.floor(Math.random() * 1000)}+ Courses
          </div>
        </div>
      </div>
    </a>
  );
};
