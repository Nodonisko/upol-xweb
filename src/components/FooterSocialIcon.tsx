import { faFacebook, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useFela } from 'react-fela';
import { Rule } from '../types';

interface FooterSocialIconProps {
  children: React.ReactNode;
}

const FooterSocialIconStyle: Rule = () => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
});

const iconStyle: Rule = ({ color }) => ({
  width: '30px',
  height: '30px',
  borderRadius: '15px',
  fontSize: '13px',
  color: 'white',
  backgroundColor: color,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
});

const linkTextStyle: Rule = () => ({
  fontSize: '16px',
  fontWeight: 500,
  color: 'white',
  marginLeft: '15px',
});

export const FooterSocialIcon = ({
  children,
  icon,
  title,
  color,
  ...props
}: FooterSocialIconProps) => {
  const { css } = useFela({ color });

  return (
    <a className={css(FooterSocialIconStyle)} href="#">
      <div className={css(iconStyle)}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className={css(linkTextStyle)}>{title}</div>
    </a>
  );
};
