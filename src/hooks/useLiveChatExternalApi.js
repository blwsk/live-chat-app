import { useEffect } from 'react';

export const useLiveChatExternalApi = () => {
  useEffect(() => {
    const hsc = window.HubSpotConversations;

    if (hsc && hsc.debug && hsc.refresh) {
      console.log('>>> calling HubSpotConversations directly <<<');
      hsc.debug(true);
      hsc.refresh();
    } else {
      window.hsConversationsOnReady = [
        () => {
          console.log('>>> using hsConversationsOnReady callback array <<<');
          hsc.debug(true);
          hsc.refresh();
        }
      ];
    }
  });
};
