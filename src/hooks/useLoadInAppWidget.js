import { useState, useEffect } from 'react';

const URI = 'https://live-chat-auth-ggf6uw26z.now.sh/';

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
      withCredentials: true,
      credentials: 'include',
      headers: {
        accept: 'application/json',
        authorization: `Bearer ${token}`
      },
      mode: 'no-cors'
    })
      .then(res => res.text())
      .then(text => (text.length ? JSON.parse(text) : {}))
      .catch(error => {
        throw error;
      });
  }, [token, error]);
};
