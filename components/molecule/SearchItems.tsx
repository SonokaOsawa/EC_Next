import { FC, useState } from 'react';
import { Btn, SearchField } from '../atom';

interface Props {
    search: (word: string | undefined) => void
}

const SearchItems: FC<Props> = ({search}) => {
    const [word, setWord] = useState('')
    return (
        <div>
            <SearchField placeholder="商品を検索する" onChange={(e => setWord(e.target.value))} />
            <Btn text="検索" onClick={() => search(word)} classname="flex items-center shadow border-blue-500 border-2 rounded-full  px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white"/>
        </div>
    )
}

export default SearchItems;