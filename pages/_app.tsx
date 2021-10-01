// import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import { AppProps } from "next/app";
import 'firebase/auth';
import { Provider } from "react-redux";
import { store } from "../features/store";
import Header from '../components/molecule/Header';
import { AuthProvider } from '../firebase/Auth';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthProvider>
      <Header/>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-6">
      <Component {...pageProps} />
      </div>
      </div>
      </AuthProvider>
    </Provider>
  )
}

export default MyApp
