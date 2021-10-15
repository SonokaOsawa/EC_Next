import { useDispatch, useSelector } from "react-redux";
import Image from 'next/image';
import Price from '../components/atom/Price';
import Btn from '../components/atom/Btn';
import {CartItems} from "../components/molecule/CartItems";
import { selectItems } from '../features/items';
import { selectCart } from "../features/cart";
import { CartPrice } from "../components/molecule/CartPrice";
import { OrderForm } from "../components/organisms/OrderForm";

const ShoppingCart = () => {
    const items = useSelector(selectItems)
    const cart = useSelector(selectCart)
    return (
        <div>
            {cart.iteminfo !== undefined ? (
                cart.iteminfo.length !== 0 ? (
                    <div>
                    <div className="flex content-start">
                        <div className="w-2/3 p-2 text-gray-700 text-center">
                            <CartItems items={items}/>
                        </div>
                        <div className="w-1/3 p-2 text-gray-700 text-center">
                            <CartPrice/>
                        </div>
                    </div>
                        <OrderForm/>
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