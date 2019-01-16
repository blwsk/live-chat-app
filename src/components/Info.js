import React from 'react';
import { useLiveChatExternalApi } from '../hooks/useLiveChatExternalApi';

function Info(props) {
  useLiveChatExternalApi();

  return <div className="really-big">Info</div>;
}

Info.propTypes = {};

export default Info;
