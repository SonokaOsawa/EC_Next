import { useDispatch, useSelector } from "react-redux";
import Image from 'next/image';
import Price from '../components/atom/Price';
import Btn from '../components/atom/Btn';

const ShoppingCart = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 text-gray-700 text-center bg-gray-400">
                カートの中身
            </div>
            <div className="col-span-1 text-gray-700 text-center bg-gray-400">
                金額
            </div>
        </div>
    )
}

export default ShoppingCart