import React from 'react';
import { useLoadInAppWidget } from '../hooks/useLoadInAppWidget';

function About(props) {
  useLoadInAppWidget();

  return <div className="really-big">About</div>;
}

About.propTypes = {};

export default About;
