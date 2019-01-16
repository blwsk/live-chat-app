import React from 'react';
import { useLiveChatExternalApi } from '../hooks/useLiveChatExternalApi';

function Empty(props) {
  useLiveChatExternalApi();

  return (
    <React.Fragment>
      <div className="really-big">Empty</div>
      There should be no widget on this page.
    </React.Fragment>
  );
}

Empty.propTypes = {};

export default Empty;
