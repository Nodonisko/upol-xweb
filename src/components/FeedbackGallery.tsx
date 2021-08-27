import React from 'react';
import { useFela } from 'react-fela';
import { getRandomNumber } from '../getRandom';
import { breakpoint, colors } from '../theme';
import { Rule } from '../types';
import { Col } from './Col';
import { Row } from './Row';

interface FeedbackGalleryProps {
  children: React.ReactNode;
}

const FeedbackGalleryStyle = () => ({
  display: 'flex',
  marginTop: '60px',
  [breakpoint.md]: {
    marginTop: '0',
  },
});

const columnImagesStyle: Rule = () => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const imageStyle: Rule = () => ({
  width: '75px',
  height: '75px',
  marginBottom: '30px',
  display: 'block',
  [breakpoint.sm]: {
    width: '100px',
    height: '100px',
  },
  [breakpoint.md]: {
    width: '150px',
    height: '150px',
  },
});

const imagePaper: Rule = () => ({
  background: 'white',
  width: '75px',
  height: '75px',
  [breakpoint.sm]: {
    width: '100px',
    height: '100px',
  },
  [breakpoint.md]: {
    width: '150px',
    height: '150px',
  },
  '> img': {
    position: 'relative',
    top: '10px',
    left: '10px',
  },
});

const imagePaperOrange: Rule = () => ({
  marginTop: '50px',
  background: colors.orange,
  width: '75px',
  height: '75px',
  [breakpoint.sm]: {
    width: '100px',
    height: '100px',
  },
  [breakpoint.md]: {
    width: '150px',
    height: '150px',
  },
  '> img': {
    position: 'relative',
    bottom: '10px',
    left: '10px',
  },
});

export const FeedbackGallery = ({
  children,
  ...props
}: FeedbackGalleryProps) => {
  const { css } = useFela();

  return (
    <div className={css(FeedbackGalleryStyle)}>
      <Row>
        <Col xs={4}>
          <div className={css(columnImagesStyle)}>
            <div className={css(imagePaper)} style={{ marginTop: '60px' }}>
              <img
                src={`https://loremflickr.com/270/${getRandomNumber(150, 250)}`}
                alt="feedback person"
                className={css(imageStyle)}
              />
            </div>
            <div className={css(imagePaperOrange)}>
              <img
                src={`https://loremflickr.com/270/${getRandomNumber(150, 250)}`}
                alt="feedback person"
                className={css(imageStyle)}
              />
            </div>
          </div>
        </Col>
        <Col xs={4}>
          <div className={css(columnImagesStyle)}>
            <img
              src={`https://loremflickr.com/270/${getRandomNumber(150, 250)}`}
              alt="feedback person"
              className={css(imageStyle)}
              style={{ marginTop: '60px' }}
            />
            <img
              src={`https://loremflickr.com/270/${getRandomNumber(150, 250)}`}
              alt="feedback person"
              className={css(imageStyle)}
            />
            <img
              src={`https://loremflickr.com/270/${getRandomNumber(150, 250)}`}
              alt="feedback person"
              className={css(imageStyle)}
            />
          </div>
        </Col>
        <Col xs={4}>
          <div className={css(columnImagesStyle)}>
            <img
              src={`https://loremflickr.com/270/${getRandomNumber(150, 250)}`}
              alt="feedback person"
              className={css(imageStyle)}
            />
            <img
              src={`https://loremflickr.com/270/${getRandomNumber(150, 250)}`}
              alt="feedback person"
              className={css(imageStyle)}
            />
            <img
              src={`https://loremflickr.com/270/${getRandomNumber(150, 250)}`}
              alt="feedback person"
              className={css(imageStyle)}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};
