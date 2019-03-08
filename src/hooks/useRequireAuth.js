import { useEffect } from 'react';

export function useRequireAuth({ history: { push } }) {
  const authenticated = !!window.firebase.auth().currentUser;

  useEffect(() => {
    if (!authenticated) {
      push(`/login`);
    }
  }, [authenticated]);

  return authenticated;
}
