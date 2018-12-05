import { useEffect } from 'react';

export const useRefreshWidget = (...args) => {
  useEffect(() => {
    if (
      window &&
      window.hubspot &&
      window.hubspot.messages &&
      window.hubspot.messages.EXPERIMENTAL_API
    ) {
      console.log('request widget open');
      window.hubspot.messages.EXPERIMENTAL_API.requestWidgetRefresh(...args);
    } else {
      console.log('this did nothing');
    }
  });
};
