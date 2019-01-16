import React from 'react';
import { useLiveChatExternalApi } from '../hooks/useLiveChatExternalApi';

function Home(props) {
  useLiveChatExternalApi();

  return <div className="really-big">Home</div>;
}

Home.propTypes = {};

export default Home;
