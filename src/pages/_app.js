import Navbar from '@/components/Navbar'
import '@/styles/globals.css';
import store from '../store/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return(

    <>
      <Provider store={store}>
    {/* navbar */}
    <Navbar/>
   <Component {...pageProps} />
  </Provider>
  </>
    )
}
