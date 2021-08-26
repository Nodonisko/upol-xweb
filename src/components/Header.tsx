import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPersonBooth, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useFela } from 'react-fela';

import { Rule } from '../types';
import { Button } from './Button';
import { Col } from './Col';
import { Logo } from './Logo';
import { Menu } from './Menu';
import { Row } from './Row';

const headerStyle: Rule = () => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  alignItems: 'center',
  flex: 1,
});

const socialLinksStyle: Rule = () => ({
  display: 'flex',
  flexDirection: 'row',
  '> div': {
    marginRight: '7px',
  },
});

const logoContainerStyle: Rule = () => ({
  position: 'absolute',
  left: '-320px',
});

const socialLinksContainerStyle: Rule = () => ({
  position: 'absolute',
  right: '-250px',
});

const menuContainerStyle: Rule = () => ({
  paddingTop: '15px',
});

export const Header = () => {
  const { css } = useFela();

  return (
    <header className={css(headerStyle)}>
      <Row>
        <Col md={3} className={css(logoContainerStyle)}>
          <Logo />
        </Col>
        <Col md={6}>
          <div className={css(menuContainerStyle)}>
            <Menu />
          </div>
        </Col>
        <Col md={3} className={css(socialLinksContainerStyle)}>
          <div className={css(socialLinksStyle)}>
            <Button icon={<FontAwesomeIcon icon={faFacebookF} size="lg" />} />
            <Button icon={<FontAwesomeIcon icon={faInstagram} size="lg" />} />
            <Button icon={<FontAwesomeIcon icon={faUserCircle} />}>
              Sign In
            </Button>
          </div>
        </Col>
      </Row>
    </header>
  );
};
