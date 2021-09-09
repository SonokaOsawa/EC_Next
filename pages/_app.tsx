// import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import { AppProps } from "next/app";
import { useEffect } from "react";
import firebase from 'firebase/app';
import 'firebase/auth';
import { Provider } from "react-redux";
import { store } from "../features/store";
import { useDispatch, useSelector } from "react-redux";
import { selectUser,  loginUser, logoutUser } from '../features/user';
import Header from '../components/molecule/Header';
// import { AuthProvider } from '../firebase/Auth';

function MyApp({ Component, pageProps }: AppProps) {
  // const dispatch = useDispatch()
  // const user = useSelector(selectUser)

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if(user) {
  //       dispatch(loginUser(user))
  //     }else{
  //       dispatch(logoutUser())
  //     }
  //   })
  // }, [dispatch])
  return (
    <Provider store={store}>
      {/* <AuthProvider> */}
      <Header/>
      <Component {...pageProps} />
      {/* </AuthProvider> */}
    </Provider>
  )
}

export default MyApp
