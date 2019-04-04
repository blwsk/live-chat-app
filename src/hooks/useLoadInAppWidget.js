import { useState, useEffect } from 'react';

const URI = 'https://auth.live-chat-krb.com/';
// const URI = 'http://localhost:5000';

export const useLoadInAppWidget = () => {
  const [token, updateToken] = useState(null);
  const [error, updateError] = useState(null);
  const [response, updateResponse] = useState(null);

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
    })
      .then(response => {
        if (!response.ok) throw new Error(response.status);

        return response.json();
      })
      .then(updateResponse);
  }, [token, error]);

  useEffect(() => {
    if (response) {
      const { userContextRequest } = response;

      window.HubSpotConversations.widget.load(userContextRequest);

      window.HubSpotConversations.on('conversationStarted', payload => {
        console.log(`Started conversation with id ${payload.conversation.conversationId}`);
      });

      window.HubSpotConversations.on('unreadConversationCountChanged', payload => {
        console.log(`New unread count is ${payload.unreadCount}!`);
      });

      window.HubSpotConversations.on('conversationClosed', payload => {
        console.log(`Conversation with id ${payload.conversation.conversationId} has been closed!`);
      });
    }
  }, [response]);
};
