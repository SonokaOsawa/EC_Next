import { FC } from 'react';
import Item from '../molecule/item';
import { Itemtype } from '../../features/items';

interface Props {
    items: Itemtype[]
}

const Items: FC<Props> = ({ items }) => {
    return (
        <div>
                <h2 className="sr-only">Products</h2>
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {items.map(item => (
                    <Item item={item} key={item.id}/>
                ))}
                </div>
        </div>
    )
}

export default Items;