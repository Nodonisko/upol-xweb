import {
  faAngleDown,
  faAngleRight,
  faCaretDown,
  faUserSecret,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useFela } from 'react-fela';
import { colors, fontFamily } from '../theme';
import { Rule } from '../types';

const factStyle: Rule = () => ({
  backgroundColor: '#ffffff',
  position: 'relative',
  flex: 1,
  cursor: 'pointer',
  marginBottom: '20px',
});

const factIconStyle: Rule = () => ({
  position: 'absolute',
  fontSize: '18px',
  right: '0',
  top: '5px',
  lineHeight: 0,
  color: colors.orange,
});

const factTitleStyle: Rule = ({ isOpen }) => ({
  fontSize: '18px',
  lineHeight: '28px',
  fontWeight: 700,
  fontFamily: fontFamily.roboto,
  color: isOpen ? colors.orange : colors.text,
  borderBottom: '1px solid #e5e5e5',
  padding: '0 30px 20px 0',
  '&:hover': {
    color: colors.orange,
  },
});

const factSubtitleStyle: Rule = () => ({
  fontSize: '15px',
  fontWeight: 500,
  fontFamily: fontFamily.hind,
  color: colors.textGrey,
  marginTop: '25px',
});

export const Question = ({ title, content, ...props }) => {
  const [isOpen, setOpen] = useState(false);
  const { css } = useFela({ isOpen });

  const handleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={css(factStyle)} {...props} onClick={handleOpen}>
      <div className={css(factIconStyle)}>
        <FontAwesomeIcon icon={isOpen ? faAngleDown : faAngleRight} />
      </div>
      <div className={css(factTitleStyle)}>{title}</div>
      {isOpen && (
        <div className={css(factSubtitleStyle)}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur
        </div>
      )}
    </div>
  );
};
