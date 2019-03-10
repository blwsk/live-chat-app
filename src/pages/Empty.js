import React from 'react';

function Empty(props) {
  return (
    <React.Fragment>
      <div className="really-big">Empty</div>
      There should be no widget on this page.
    </React.Fragment>
  );
}

Empty.propTypes = {};

export default Empty;
