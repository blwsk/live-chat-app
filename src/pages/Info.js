import React from 'react';
import { useLoadInAppWidget } from '../hooks/useLoadInAppWidget';

function Info(props) {
  useLoadInAppWidget();

  return <div className="really-big">Info</div>;
}

Info.propTypes = {};

export default Info;
