import { FC } from 'react';

interface Props {
    text: string
    onClick: () => void
}

const Btn: FC<Props> = ({text, onClick}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

export default Btn;