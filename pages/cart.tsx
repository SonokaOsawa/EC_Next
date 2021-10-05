import { useDispatch, useSelector } from "react-redux";
import Image from 'next/image';
import Price from '../components/atom/Price';
import Btn from '../components/atom/Btn';
import {CartItems} from "../components/molecule/CartItems";
import { selectItems } from '../features/items';
import { selectCart } from "../features/cart";
import { CartPrice } from "../components/molecule/CartPrice";

const ShoppingCart = () => {
    const items = useSelector(selectItems)
    const cart = useSelector(selectCart)
    return (
        <div>
            {cart.iteminfo !== undefined ? (
                cart.iteminfo.length !== 0 ? (
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2 text-gray-700 text-center bg-gray-200">
                            <CartItems items={items}/>
                        </div>
                        <div className="col-span-1 text-gray-700 text-center">
                            <CartPrice/>
                        </div>
                    </div>
                ) : (
                    <div>カートに商品がありません</div>
                )
            ) : (
                <div>カートに商品がありません</div>
            )}
        </div>
    )
}

export default ShoppingCart;