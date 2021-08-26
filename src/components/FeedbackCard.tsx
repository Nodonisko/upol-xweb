import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useFela } from 'react-fela';

import avatar from '../images/avatar.jpg';
import quote from '../images/quote.png';
import { colors, fontFamily } from '../theme';
import { Rule } from '../types';
import { Button } from './Button';

interface FeedbackCardProps {
  children: React.ReactNode;
}

const feedbackCardStyle = () => ({
  display: 'flex',
  width: '450px',
  backgroundColor: '#eaf4f7',
  marginTop: '20px',
});

const insideCardStyle: Rule = () => ({
  position: 'relative',
  left: '20px',
  top: '20px',
  background: 'white',
  padding: '55px',
});

const feedbackMain: Rule = () => ({
  fontSize: '24px',
  lineHeight: '35px',
  fontWeight: 400,
  marginTop: 0,
});

const feedbackDescription: Rule = () => ({
  color: colors.textLightGrey,
  fontSize: '15px',
  lineHeight: '28px',
  marginBottom: '25px',
});

const feedbackAuthorStyle: Rule = () => ({
  display: 'flex',
});

const avatarStyle: Rule = () => ({
  width: '50px',
  height: '50px',
  borderRadius: '25px',
  marginRight: '20px',
});

const authorNameStyle: Rule = () => ({
  fontFamily: fontFamily.roboto,
  fontSize: '20px',
  fontWeight: 500,
});

const authorTitle: Rule = () => ({
  color: colors.orange,
  fontWeight: 600,
});

const feedbackButtonsStyle: Rule = () => ({
  paddingTop: '60px',
  display: 'flex',

  backgroundImage: `url('${quote}')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right bottom',
});

const feedbackButton: Rule = () => ({
  width: '50px',
  marginRight: '10px',
});

export const FeedbackCard = ({ children, ...props }: FeedbackCardProps) => {
  const { css } = useFela();

  return (
    <div className={css(feedbackCardStyle)}>
      <div className={css(insideCardStyle)}>
        <p className={css(feedbackMain)}>
          Sed ut perspiciatis unde omnis natus error sit voluptatem accusa ntium
          dolore mque lauda enim ad minima veniam quis nostrumexe
        </p>
        <p className={css(feedbackDescription)}>
          Rnimad minima veniam quis nostreercit ationem ullam corporis suscipit
          laboriosam nisiut
        </p>
        <div className={css(feedbackAuthorStyle)}>
          <img
            src={avatar}
            alt="feedback author"
            className={css(avatarStyle)}
          />
          <div>
            <div className={css(authorNameStyle)}>Sousa Fernandes</div>
            <div className={css(authorTitle)}>CEO & Founder</div>
          </div>
        </div>
        <div className={css(feedbackButtonsStyle)}>
          <div className={css(feedbackButton)}>
            <Button type="grey" icon={<FontAwesomeIcon icon={faArrowLeft} />} />
          </div>
          <div className={css(feedbackButton)}>
            <Button
              type="grey"
              icon={<FontAwesomeIcon icon={faArrowRight} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
