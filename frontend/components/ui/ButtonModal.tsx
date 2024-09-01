import React from 'react';

type Props = {text: String}

const ButtonModal = (props: Props) => {
return (
    <div className="h-10 w-24 rounded-full border border-black bg-[#91abff] text-[#594a83] font-bold text-center flex items-center justify-center mb-4">{props.text}</div>
    )
}

export default ButtonModal