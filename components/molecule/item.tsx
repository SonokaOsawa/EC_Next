import { FC } from 'react';
import { Itemtype } from '../../features/items';
import { useRouter } from "next/router";
import Image from 'next/image';
import Link from 'next/link'

interface Props {
    item: Itemtype;
}

const Item: FC<Props> = ({ item }) => {
    return (
        <Link href={`/${item.id}`} passHref>
                <a className="group">
                    <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                        <Image src={`/${item.img}`} alt="Pic" className="h-full w-full object-center object-cover group-hover:opacity-75" width={400} height={400}/>
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">
                        {item.name}
                    </h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                        {item.pm}
                    </p>
                </a>
        </Link>
    )
}

export default Item;