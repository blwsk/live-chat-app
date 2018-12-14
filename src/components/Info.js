import React from 'react';
import { useRefreshWidget } from '../hooks/useRefreshWidget';

function Info(props) {
  useRefreshWidget();

  return <div className="really-big">Info</div>;
}

Info.propTypes = {};

export default Info;
