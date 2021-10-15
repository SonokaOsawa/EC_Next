import { FC, useContext } from 'react';
import Link from "next/link";
import { Btn } from '../atom';
import firebase from '../../firebase/firebaseConfig';
import { AuthContext } from '../../firebase/Auth';
import { useSelector } from "react-redux";
import { selectUser } from '../../features/user';

const Header: FC = () => {
    const { currentUser } = useContext(AuthContext);
    const user = useSelector(selectUser)

    const login = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
      }
    const logout = () => {
        firebase.auth().signOut().catch((e) => {
            alert(e);
          });
    }
    return (
        <nav className="bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <div>
                        <a className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>
                    </div>
                </div>

                <div className="items-center md:flex">
                    <div className="flex flex-col md:flex-row md:mx-6">
                        <Link href="/">
                        <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0">Home</a>
                        </Link>
                        <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" href="#">Shop</a>
                        <a className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" href="#">Contact</a>
                        {user.name && <span className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0">{user.name}</span>}
                        <Btn onClick={login} text='login' classname="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" ></Btn>
                        <Btn onClick={logout} text='logout' classname="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" ></Btn>
                    </div>
                    <Link href="/cart" passHref>
                    <div className="flex justify-center md:block">
                        <a className="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                            {/* <span className="absolute top-0 left-0 p-1 text-xs text-white bg-indigo-500 rounded-full"></span> */}
                        </a>
                    </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Header;