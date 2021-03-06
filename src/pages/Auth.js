import React, { useEffect } from 'react';

function Auth({ history: { push } }) {
  useEffect(() => {
    if (
      window.firebase.auth().isSignInWithEmailLink(window.location.href) &&
      window.localStorage.liveChatKrbEmail
    ) {
      window.firebase
        .auth()
        .signInWithEmailLink(window.localStorage.liveChatKrbEmail, window.location.href)
        .then(() => {
          window.localStorage.removeItem('liveChatKrbEmail');

          push('/');
        })
        .catch(err => {
          throw Object.assign(new Error(), err);
        });
    }
  });

  return <div className="really-big">Auth</div>;
}

Auth.propTypes = {};

export default Auth;
