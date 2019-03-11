import React, { useEffect } from 'react';

function RequireAuth({ isAuthenticated, children, push }) {
  useEffect(() => {
    if (!isAuthenticated) {
      push('/login');
    }
  }, []);

  return <>{isAuthenticated && children}</>;
}

const requireAuth = isAuthenticated => Component => props => {
  return (
    <RequireAuth isAuthenticated={isAuthenticated} push={props.history.push}>
      <Component {...props} />
    </RequireAuth>
  );
};

export default requireAuth;
