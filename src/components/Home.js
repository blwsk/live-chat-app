import React from 'react';
import { useRefreshWidget } from '../hooks/useRefreshWidget';

function Home(props) {
  useRefreshWidget();

  return <div className="really-big">Home</div>;
}

Home.propTypes = {};

export default Home;
