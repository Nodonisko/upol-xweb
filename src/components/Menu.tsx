import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useFela } from 'react-fela';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { colors, fontFamily } from '../theme';
import { Rule } from '../types';

const menuItems = [
  { title: 'Home', href: '/' },
  { title: 'Courses', href: '/courses' },
  { title: 'Events', href: '/events' },
  { title: 'Pages', href: '/blog' },
  { title: 'Contact', href: '/contact' },
] as const;

const menuStyle: Rule = () => ({
  fontSize: '18px',
  fontWeight: 500,
  display: 'flex',
  fontFamily: fontFamily.roboto,
});

const menuItemStyle: Rule = () => ({
  marginRight: '20px',
});

const menuItemLinkStyle: Rule = () => ({
  textDecoration: 'none',
  color: colors.text,
  ':hover': {
    color: colors.orange,
  },
});

const caretStyle: Rule = () => ({
  marginLeft: '7px',
});

const MenuItem = ({ title, href }) => {
  const { css } = useFela();

  return (
    <div className={css(menuItemStyle)}>
      <a href={href} className={css(menuItemLinkStyle)}>
        {title}
        <FontAwesomeIcon
          icon={faAngleDown}
          className={css(caretStyle)}
          size="sm"
        />
      </a>
    </div>
  );
};

export const Menu = () => {
  const { css } = useFela();
  return (
    <nav className={css(menuStyle)}>
      {menuItems.map(({ href, title }) => (
        <MenuItem href={href} title={title} key={href} />
      ))}
    </nav>
  );
};
