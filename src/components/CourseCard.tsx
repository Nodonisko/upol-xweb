import {
  faClock,
  faComments,
  faStar,
  faStarHalfAlt,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useFela } from 'react-fela';

import { getRandomNumber } from '../getRandom';
import { colors, fontFamily } from '../theme';
import { Rule } from '../types';
import { Tag } from './Tag';
import avatar from '../images/avatar.jpg';

interface CourseCardProps {
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
  height: '250px',
  position: 'relative',
  '> img': {
    maxHeight: '100%',
    width: '100%',
  },
});

const courseDescriptionStyle: Rule = () => ({
  padding: '30px',

  background: 'white',
});

const courseTitleStyle: Rule = () => ({
  fontFamily: fontFamily.roboto,
  fontSize: '22px',
  fontWeight: 700,
  color: colors.text,
  ':hover': {
    color: colors.orange,
  },
  marginBottom: '30px',
  marginTop: 0,
});

const courseMetaStyle: Rule = () => ({
  display: 'flex',
  color: colors.textLightGrey,
  borderTop: `1px solid #e2e2e2`,
  paddingTop: '25px',
  justifyContent: 'space-between',
});

const courseNumber: Rule = () => ({
  marginLeft: '23px',
});

const starRatingStyle: Rule = () => ({
  color: colors.orange,
  fontSize: '12px',
  marginLeft: '15px',
});

const courseHeaderStyle: Rule = () => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
});

const avatarStyle: Rule = () => ({
  width: '45px',
  height: '45px',
  borderRadius: '25px',
});

const courseInfoStyle: Rule = () => ({
  position: 'absolute',
  bottom: 0,
  padding: '0 35px 20px',
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const courseAuthorStyle: Rule = () => ({
  display: 'flex',
  alignItems: 'center',
  '> span': {
    marginLeft: '14px',
    color: 'white',
    fontFamily: fontFamily.roboto,
    fontSize: '20px',
    fontWeight: 500,
  },
});

const priceStyle: Rule = () => ({
  justifySelf: 'flex-end',
});

export const CourseCard = ({
  title,
  description,
  author,
  tag,
  tagColor,
  ...props
}: CourseCardProps) => {
  const { css } = useFela();

  return (
    <a className={css(courseCategoryCardStyle)} href="#">
      <div className={css(courseImageStyle)}>
        <img
          src={`https://loremflickr.com/270/${getRandomNumber(200, 270)}`}
          alt="course kitten"
        />
        <div className={css(courseInfoStyle)}>
          <div className={css(courseAuthorStyle)}>
            <img src={avatar} className={css(avatarStyle)} alt={author} />
            <span>{author}</span>
          </div>
          <div className={css(priceStyle)}>
            <Tag>$59.95</Tag>
          </div>
        </div>
      </div>
      <div className={css(courseDescriptionStyle)}>
        <div className={css(courseHeaderStyle)}>
          <Tag color={tagColor}>{tag}</Tag>
          <div className={css(starRatingStyle)}>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfAlt} />
          </div>
        </div>
        <h4 className={css(courseTitleStyle)}>{title}</h4>

        <div className={css(courseMetaStyle)}>
          <div>
            <FontAwesomeIcon icon={faUsers} color={colors.orange} />{' '}
            {getRandomNumber(100, 200)}
          </div>
          <div className={css(courseNumber)}>
            <FontAwesomeIcon icon={faClock} color={colors.orange} />{' '}
            {getRandomNumber(3, 48)}hr
          </div>
          <div className={css(courseNumber)}>
            <FontAwesomeIcon icon={faComments} color={colors.orange} />{' '}
            {getRandomNumber(1, 99)}k
          </div>
        </div>
      </div>
    </a>
  );
};
