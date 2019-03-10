import { useState, useEffect } from 'react';

export const useAuthenticated = () => {
  const [authenticated, updateAuthenticated] = useState(!!window.firebase.auth().currentUser);

  useEffect(() => {
    window.firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        updateAuthenticated(true);
      } else {
        updateAuthenticated(false);
      }
    });
  }, [authenticated]);

  return authenticated;
};
