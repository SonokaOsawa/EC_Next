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
            <Btn text="検索" onClick={() => search(word)} />
        </div>
    )
}

export default SearchItems;