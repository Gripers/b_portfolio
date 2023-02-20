import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

import { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return <Component {...pageProps} />;
}
