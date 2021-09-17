import firebase from './firebaseConfig';
import { FC, createContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectUser,  loginUser, logoutUser } from '../features/user';

interface AuthContextProps {
    currentUser: firebase.User | null | undefined;
}

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined });

const AuthProvider: FC = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<firebase.User | null | undefined>(undefined);
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
          // ログイン状態が変化すると呼ばれる
          setCurrentUser(user);
          if(user) {
            let uid = user.uid
            let name = user.displayName
              dispatch(loginUser({uid, name}))
          }else{
              dispatch(logoutUser())
          }
        })
      }, [dispatch]);
    return (
        <AuthContext.Provider value={{ currentUser: currentUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider }

// export {}