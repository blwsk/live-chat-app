import { useEffect } from 'react';

export const useRefreshWidget = (...args) => {
  useEffect(() => {
    if (window.HubSpotConversations && window.HubSpotConversations.refresh) {
      console.log('refreshing widget...');
      window.HubSpotConversations.refresh(...args);
    } else {
      console.log('this did nothing');
    }
  });
};
