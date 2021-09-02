/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  faBook,
  faCalendar,
  faCalendarAlt,
  faComments,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useFela } from 'react-fela';

import { getRandomNumber } from '../getRandom';
import { colors, fontFamily } from '../theme';
import { Rule } from '../types';
import { Tag } from './Tag';

interface BlogCardProps {
  title: string;
  description: string;
}

const blogCategoryCardStyle: Rule = () => ({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  textDecoration: 'none',
  marginBottom: '30px',
});

const blogImageStyle: Rule = () => ({
  width: '100%',
  height: '350px',
  '> img': {
    maxHeight: '100%',
    width: '100%',
  },
});

const blogDescriptionStyle: Rule = () => ({
  border: '1px solid #d7d7d7',
  borderTop: 0,
  padding: '30px',
  backgroundColor: 'white',
});

const blogTitleStyle: Rule = () => ({
  fontFamily: fontFamily.roboto,
  fontSize: '22px',
  fontWeight: 700,
  margin: 0,
  color: colors.text,
  ':hover': {
    color: colors.orange,
  },
});

const blogAuthorStyle: Rule = () => ({
  color: colors.orange,
  fontSize: '18px',
  fontFamily: fontFamily.roboto,
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  marginTop: '30px',
  '> img': {
    marginRight: '15px',
    borderRadius: '35px',
  },
});

const blogMetaStyle: Rule = () => ({
  display: 'flex',
  padding: '20px 0',
  fontWeight: 500,
  color: '#708389',
  fontFamily: fontFamily.roboto,
  fontSize: '15px',
});

export const BlogCard = ({
  title,
  date,
  commentsNumber,
  author,
  ...props
}: BlogCardProps) => {
  const { css } = useFela();

  return (
    <a className={css(blogCategoryCardStyle)} href="#">
      <div className={css(blogImageStyle)}>
        <img
          src={`https://picsum.photos/370/${getRandomNumber(370, 470)}`}
          alt="blog kitten"
        />
      </div>
      <div className={css(blogDescriptionStyle)}>
        <div className={css(blogMetaStyle)}>
          <div>
            <FontAwesomeIcon icon={faCalendarAlt} color={colors.orange} />{' '}
            {date}
          </div>
          <div style={{ marginLeft: 18 }}>
            <FontAwesomeIcon icon={faComments} color={colors.orange} /> {date}
          </div>
        </div>
        <h4 className={css(blogTitleStyle)}>{title}</h4>
        <div className={css(blogAuthorStyle)}>
          <img src="https://picsum.photos/35" alt={author} />
          {author}
        </div>
      </div>
    </a>
  );
};
