import { faBook, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useFela } from 'react-fela';
import { Row, Col } from '.';
import { breakpoint, colors, fontFamily } from '../theme';

interface InstructorFactProps {
  children: React.ReactNode;
}

const InstructorFactStyle = () => ({
  display: 'flex',
  flexDirection: 'column',
});

const factIcon = () => ({
  fontSize: '40px',
  color: colors.orange,
});

const factTitle = () => ({
  fontSize: '22px',
  fontWeight: 700,
  fontFamily: fontFamily.roboto,
  margin: 0,
});

const factDescription = () => ({
  color: colors.textLightGrey,
  fontSize: '15px',
  lineHeight: '28px',
  marginBottom: 0,
});

const instructorSecondFact = () => ({
  marginTop: '30px',
  [breakpoint.md]: { border: 0, paddingLeft: '15px', marginTop: 0 },
});

export const InstructorFact = ({ children, ...props }: InstructorFactProps) => {
  const { css } = useFela();

  return (
    <Row>
      <Col md={6} style={{ borderRight: `1px solid #c3d9df` }}>
        <div className={css(InstructorFactStyle)} style={{ paddingRight: 15 }}>
          <div className={css(factIcon)}>
            <FontAwesomeIcon icon={faLaptopCode} />
          </div>
          <h5 className={css(factTitle)}>Digitalization</h5>
          <p className={css(factDescription)}>
            Sed ut perspia unde omnis aste natus error sit volu
          </p>
        </div>
      </Col>
      <Col md={6}>
        <div
          className={`${css(InstructorFactStyle)} ${css(instructorSecondFact)}`}
        >
          <div className={css(factIcon)}>
            <FontAwesomeIcon icon={faBook} />
          </div>
          <h5 className={css(factTitle)}>Book Friendly</h5>
          <p className={css(factDescription)}>
            Sed ut perspia unde omnis aste natus error sit volu
          </p>
        </div>
      </Col>
    </Row>
  );
};
