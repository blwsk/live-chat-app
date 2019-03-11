import { useState, useEffect } from 'react';

const URI = 'https://auth.live-chat-krb.com/';
// const URI = 'http://localhost:5000';

export const useLoadInAppWidget = () => {
  const [token, updateToken] = useState(null);
  const [error, updateError] = useState(null);

  useEffect(() => {
    window.firebase
      .auth()
      .currentUser.getIdToken(true)
      .then(updateToken)
      .catch(updateError);
  }, []);

  useEffect(() => {
    if (error) {
      const e = { ...new Error(), ...error };
      throw e;
    }

    if (!token) {
      return;
    }

    fetch(URI, {
      method: 'GET',

      headers: new Headers({
        accept: 'application/json',
        authorization: `Bearer ${token}`
      })
    }).then(response => {
      if (!response.ok) throw new Error(response.status);

      return response.json();
    });
  }, [token, error]);
};
