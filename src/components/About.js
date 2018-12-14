import React from 'react';
import { useRefreshWidget } from '../hooks/useRefreshWidget';

function About(props) {
  useRefreshWidget();

  return <div className="really-big">About</div>;
}

About.propTypes = {};

export default About;
