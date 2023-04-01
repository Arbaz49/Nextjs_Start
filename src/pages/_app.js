import Navbar from '@/components/Navbar'
import '@/styles/globals.css';
import store from '../store/store'
import { Provider } from 'react-redux';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return(

    <>
      <Provider store={store}>
    <Head>
   
    </Head>
    {/* navbar */}
    <Navbar/>
   <Component {...pageProps} />
  </Provider>
  </>
    )
}
