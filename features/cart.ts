import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import firebase from '../firebase/firebaseConfig';
import { AppThunk } from "./store";

export interface Carttype {
    id?: string,
    uid?: string,
    status?: number,
    iteminfo?: Iteminfotype[]
}

export interface Iteminfotype {
    id?: string,
    itemId?: number,
    buynum?: number,
    size?: string,
    price?: number
}

const initialState: Carttype = {}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart: (state, action: PayloadAction<Carttype>) => {
            return (state = action.payload);
        },
        resetCart: (state) => {
            return (state = initialState);
        }
    }
});

export const { setCart, resetCart } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer

export const getCart = (uid: string): AppThunk => (dispatch): void => {
    firebase
    .firestore()
    .collection(`users/${uid}/orders`)
    .get()
    .then( snapshot => {
        snapshot.forEach( doc => {
            let cart: Carttype = doc.data()
            if(cart.status === 0){
                dispatch(setCart(cart))
            }
        })
    })
}

export const newCart = (cart: Carttype, uid: string): AppThunk => 
    (dispatch): void => {
    firebase
    .firestore()
    .collection(`users/${uid}/orders`)
    .doc(cart.id)
    .set(cart)
    .then( () => {
        dispatch(setCart(cart))
    })
}

export const addCart = (cart: Carttype, uid: string): AppThunk =>
    (dispatch): void => {
        firebase
        .firestore()
        .collection(`users/${uid}/orders`)
        .doc(cart.id)
        .update(cart)
        .then(() => {
            dispatch(setCart(cart))
        })
    }