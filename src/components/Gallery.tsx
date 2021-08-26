/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
import { useFela } from 'react-fela';
import { colors, fontFamily } from '../theme';
import { Rule } from '../types';
import { SRLWrapper } from 'simple-react-lightbox';
import { Row } from './Row';
import { Col } from './Col';
import { gallery } from '../data';
import { getRandomNumber } from '../getRandom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

interface GalleryProps {
  children: React.ReactNode;
}

const galleryStyle: Rule = () => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
});

const galleryTabsStyle = () => ({
  display: 'flex',

  borderBottom: '1px solid #dcdcdc',
  padding: '0 40px',
});

const tabStyle = () => ({
  padding: '0 28px 25px 28px',
  fontFamily: fontFamily.roboto,
  fontSize: '18px',
  fontWeight: 700,
  cursor: 'pointer',
  borderBottom: `2px solid transparent`,
  ':hover': {
    color: colors.orange,
    borderBottom: `2px solid ${colors.orange}`,
  },
});

const activeTabStyle: Rule = () => ({
  color: colors.orange,
  borderBottom: `2px solid ${colors.orange}`,
});

const galleryImagesStyle = () => ({
  marginTop: '80px',
});

const galleryImageStyle = () => ({
  marginBottom: '30px',
  position: 'relative',
  display: 'block',
  background: 'black',

  '> img': {
    width: '100%',
    height: '100%',
    display: 'block',
    transition: '0.3s opacity',
  },
  '> div': {
    opacity: 0,
  },
  ':hover > img': {
    opacity: 0.75,
  },
});

const imageOverlay: Rule = () => ({
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  position: 'absolute',
  backgroundColor: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontSize: '50px',
});

const galleryTabs = [
  'Show All',
  'University',
  'Group Study',
  'Awards',
  'Students',
  'Teachers',
  'Campus',
];

export const Gallery = ({ children, ...props }: GalleryProps) => {
  const { css } = useFela();
  const [activeTab, setActiveTab] = useState(galleryTabs[0]);
  const galleryImages = new Set();
  galleryImages.add(getRandomNumber(0, 15));
  galleryImages.add(getRandomNumber(0, 15));
  galleryImages.add(getRandomNumber(0, 15));
  galleryImages.add(getRandomNumber(0, 15));
  galleryImages.add(getRandomNumber(0, 15));
  galleryImages.add(getRandomNumber(0, 15));
  console.log(gallery);
  return (
    <div className={css(galleryStyle)}>
      <div>
        <div className={css(galleryTabsStyle)}>
          {galleryTabs.map((tabName) => (
            <div
              key={tabName}
              role="button"
              onClick={() => {
                setActiveTab(tabName);
              }}
              className={css([
                tabStyle,
                activeTab === tabName ? activeTabStyle : undefined,
              ])}
            >
              {tabName}
            </div>
          ))}
        </div>
      </div>

      <div className={css(galleryImagesStyle)}>
        <SRLWrapper>
          <Row>
            {[...galleryImages].map((imageIndex) => (
              <Col md={4} key={imageIndex}>
                <div>
                  <a
                    href={gallery[imageIndex]}
                    className={css(galleryImageStyle)}
                  >
                    <img src={gallery[imageIndex]} alt="gallery" />
                  </a>
                </div>
              </Col>
            ))}
          </Row>
        </SRLWrapper>
      </div>
    </div>
  );
};
