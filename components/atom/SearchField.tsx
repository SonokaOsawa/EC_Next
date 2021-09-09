import { FC } from "react";

interface Props {
    placeholder: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchField: FC<Props> = ({placeholder, onChange}) => {
    return (
        <input type="text" placeholder={placeholder} onChange={onChange}/>
    )
}

export default SearchField;