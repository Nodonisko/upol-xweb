import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { useFela } from 'react-fela';

import { breakpoint, colors, fontFamily } from '../theme';
import { Rule } from '../types';
import { Col } from './Col';
import { Container } from './Container';
import { FooterSocialIcon } from './FooterSocialIcon';
import { LogoWhite } from './LogoWhite';
import { Row } from './Row';

import company1 from '../images/partners/company1.png';
import company2 from '../images/partners/company2.png';
import company3 from '../images/partners/company3.png';
import company4 from '../images/partners/company4.png';
import company5 from '../images/partners/company5.png';

const clientSection: Rule = () => ({
  backgroundColor: colors.orange,
  padding: '80px 0 20px',
  [breakpoint.md]: {
    padding: '80px 0',
  },
});

const clientLogosStyle: Rule = () => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexWrap: 'wrap',
  '> img': {
    marginBottom: '60px',
  },
});

const footerStyle: Rule = () => ({
  backgroundColor: '#0b2e39',
  padding: '60px 0 45px',
});

const copyrightStyle: Rule = () => ({
  fontFamily: fontFamily.roboto,
  color: '#94a7b5',
  fontSize: '15px',
  padding: '22px',
  textAlign: 'center',
  backgroundColor: '#0c3542',
  marginTop: '60px',
});

const footerSeparatorContainerStyle: Rule = () => ({
  display: 'flex',
  justifyContent: 'center',
  margin: '60px 0',
});

const footerSeparatorStyle: Rule = () => ({
  backgroundColor: colors.orange,
  height: '2px',
  width: '200px',
});

export const Footer = () => {
  const { css } = useFela();

  return (
    <>
      <section className={css(clientSection)}>
        <Container>
          <div className={css(clientLogosStyle)}>
            <img src={company1} alt="partner 1" />
            <img src={company2} alt="partner 2" />
            <img src={company3} alt="partner 3" />
            <img src={company4} alt="partner 4" />
            <img src={company5} alt="partner 5" />
          </div>
        </Container>
      </section>
      <footer className={css(footerStyle)}>
        <Container>
          <Row>
            <Col md={3}>
              <LogoWhite />
            </Col>
            <Col md={1}></Col>
            <Col md={2} sm={4} xs={6}>
              <FooterSocialIcon
                icon={faFacebookF}
                title="Facebook"
                color="#1771e6"
              />
            </Col>
            <Col md={2} sm={4} xs={6}>
              <FooterSocialIcon
                icon={faTwitter}
                title="Twitter"
                color="#1da1f2"
              />
            </Col>
            <Col md={2} sm={4} xs={6}>
              <FooterSocialIcon
                icon={faYoutube}
                title="YouTube"
                color="#ff0000"
              />
            </Col>
            <Col md={2} sm={4} xs={6}>
              <FooterSocialIcon
                icon={faInstagram}
                title="Instagram"
                color="#de0e88"
              />
            </Col>
          </Row>
          <div className={css(footerSeparatorContainerStyle)}>
            <div className={css(footerSeparatorStyle)} />
          </div>
          <div className={css(copyrightStyle)}>
            Copyright © 2020{' '}
            <span style={{ color: 'white' }}>
              <b>Edu</b>Plus
            </span>{' '}
            All Rights Reserved.
          </div>
        </Container>
      </footer>
    </>
  );
};
