import React, { useState } from 'react';

function Login(props) {
  const [emailValue, updateEmail] = useState('');
  const [hasSentEmail, updateHasSentEmail] = useState(false);

  const onChange = e => updateEmail(e.target.value);

  const onClick = () => {
    const email = emailValue;

    window.firebase
      .auth()
      .setPersistence(window.firebase.auth.Auth.Persistence.SESSION)
      .then(() =>
        window.firebase.auth().sendSignInLinkToEmail(email, {
          url: `${window.location.origin}/auth`,
          handleCodeInApp: true
        })
      )
      .then(() => {
        window.localStorage.liveChatKrbEmail = email;
        updateEmail('');
        updateHasSentEmail(true);
      })
      .catch(err => {
        throw Object.assign(new Error(), err);
      });
  };

  return (
    <React.Fragment>
      <div className="really-big">Login</div>
      {hasSentEmail ? (
        <p>Check your email</p>
      ) : (
        <>
          <label htmlFor="email">Enter your email</label>
          <br />
          <input id="email" name="email" value={emailValue} onChange={onChange} />
          <br />
          <button onClick={onClick}>Send me a login link</button>
        </>
      )}
    </React.Fragment>
  );
}

Login.propTypes = {};

export default Login;
