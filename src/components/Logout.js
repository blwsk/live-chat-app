import React from 'react';

function Logout({ history: { push } }) {
  const onClick = () => {
    window.firebase.auth().signOut();
    push('/');
  };

  return (
    <React.Fragment>
      <div className="really-big">Logout</div>
      <button onClick={onClick}>Click to logout</button>
    </React.Fragment>
  );
}

Logout.propTypes = {};

export default Logout;
