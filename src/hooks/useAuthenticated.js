import { useState, useEffect } from 'react';

export const status = {
  AUTHENTICATED: 'authenticated',
  PENDING: 'pending',
  UNKNOWN: 'unknown'
};

export const useAuthenticated = () => {
  const [currentStatus, updateCurrentStatus] = useState(status.PENDING);

  useEffect(() => {
    window.firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        updateCurrentStatus(status.AUTHENTICATED);
      } else {
        updateCurrentStatus(status.UNKNOWN);
      }
    });
  }, [currentStatus]);

  return currentStatus;
};
