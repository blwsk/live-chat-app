import { useState, useEffect } from 'react';

const URI = 'https://auth.live-chat-krb.com/';

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

      headers: new Headers({
        accept: 'application/json',
        authorization: `Bearer ${token}`,

        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      })
    })
      .then(res => res.text())
      .then(text => (text.length ? JSON.parse(text) : {}))
      .catch(error => {
        throw error;
      });
  }, [token, error]);
};
