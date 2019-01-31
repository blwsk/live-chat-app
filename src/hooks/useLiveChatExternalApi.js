import { useEffect } from 'react';

export const useLiveChatExternalApi = () => {
  useEffect(() => {
    const isApiPresent =
      window.HubSpotConversations &&
      window.HubSpotConversations.debug &&
      window.HubSpotConversations.widget;

    if (isApiPresent) {
      console.log('>>> calling HubSpotConversations directly <<<');
      window.HubSpotConversations.debug(true);
      window.HubSpotConversations.widget.refresh();
    } else {
      window.hsConversationsOnReady = [
        () => {
          console.log('>>> using hsConversationsOnReady callback array <<<');
          window.HubSpotConversations.debug(true);
          window.HubSpotConversations.widget.refresh();
        }
      ];
    }
  });
};
