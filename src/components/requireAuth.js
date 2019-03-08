import React from 'react';
import { useRequireAuth } from '../hooks/useRequireAuth';

function requireAuth(Component) {
  return props => {
    const isAuthenticated = useRequireAuth({ history: props.history });

    return isAuthenticated && <Component {...props} />;
  };
}

export default requireAuth;
