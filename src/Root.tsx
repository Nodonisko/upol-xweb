import React from 'react';

import { createRenderer } from 'fela';
import { RendererProvider } from 'react-fela';
import { colors, fontFamily } from './theme';
import SimpleReactLightbox from 'simple-react-lightbox';

require('typeface-roboto');
require('typeface-hind');

const renderer = createRenderer();

const styleObject = {
  fontFamily: fontFamily.hind,
  width: '100%',
  fontSize: '15px',
  margin: 0,
  padding: 0,
  color: colors.text,
};

const boxSizingStyle = {
  boxSizing: 'border-box',
};

renderer.renderStatic(styleObject, 'html,body');
renderer.renderStatic(boxSizingStyle, '*');

export const Root = ({ children }) => (
  <RendererProvider renderer={renderer}>
    <SimpleReactLightbox>{children}</SimpleReactLightbox>
  </RendererProvider>
);
