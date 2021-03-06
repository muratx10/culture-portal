import React from 'react';
import Layout from './src/components/Layout.tsx';

import 'react-image-gallery/styles/scss/image-gallery.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './src/styles/index.scss';

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export default wrapPageElement;
