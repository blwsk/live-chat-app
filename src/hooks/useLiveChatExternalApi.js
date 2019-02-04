import { useEffect } from 'react';

function loadOrRefresh() {
  if (window.HubSpotConversations.widget.status().loaded === true) {
    window.HubSpotConversations.widget.refresh();
  } else {
    window.HubSpotConversations.widget.load();
  }
}

export const useLiveChatExternalApi = () => {
  useEffect(() => {
    const isApiPresent =
      window.HubSpotConversations &&
      window.HubSpotConversations.debug &&
      window.HubSpotConversations.widget;

    if (isApiPresent) {
      console.log('>>> calling HubSpotConversations directly <<<');
      window.HubSpotConversations.debug(true);
      loadOrRefresh();
    } else {
      window.hsConversationsOnReady = [
        () => {
          console.log('>>> using hsConversationsOnReady callback array <<<');
          window.HubSpotConversations.debug(true);
        }
      ];
    }
  });
};
