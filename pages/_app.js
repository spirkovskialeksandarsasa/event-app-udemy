import MainHeader from '@/components/MainHeader';
import '@/styles/globals.css'
import { Fragment } from 'react'
import Icon from '@/components/Icon';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }) {
  
  return (<>
  <Layout>
<Component {...pageProps} />
</Layout>
</>
  );
}
