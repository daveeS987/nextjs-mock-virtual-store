import { Provider } from 'react-redux';
import { store } from '../store/store.js';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;