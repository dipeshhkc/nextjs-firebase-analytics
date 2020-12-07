import { useEffect } from 'react';
import { analytics } from '../utils/firebase';
import { useRouter } from 'next/router';

const MyApp = ({ Component, pageProps }) => {
  const routers = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const logEvent = (url) => {
        analytics().setCurrentScreen(url);
        analytics().logEvent('screen_view');
      };

      routers.events.on('routeChangeComplete', logEvent);
      logEvent(window.location.pathname);

      return () => {
        routers.events.off('routeChangeComplete', logEvent);
      };
    }
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
