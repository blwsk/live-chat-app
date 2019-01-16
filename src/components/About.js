import React from 'react';
import { useLiveChatExternalApi } from '../hooks/useLiveChatExternalApi';

function About(props) {
  useLiveChatExternalApi();

  return <div className="really-big">About</div>;
}

About.propTypes = {};

export default About;
