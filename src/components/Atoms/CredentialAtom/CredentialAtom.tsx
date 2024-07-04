import React from 'react'

type Props = {
    value: number;
    metric: string;
    label: string;
}

export default function CredentialAtom(props: Props) {
  return (
    <div className='flex items-center gap-2'>
      <h1 className='font-roboto font-outline-1 md:font-outline-2 text-[35px] md:text-[56px] font-bold text-white'>
        {props.value}
      </h1>
      <div>
        <p className='text-xl md:text-2xl font-semibold md:font-bold'>{props.metric}</p>
        <p>{props.label}</p>
      </div>
    </div>
  );
}
