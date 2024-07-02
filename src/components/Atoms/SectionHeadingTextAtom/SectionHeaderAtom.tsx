import React from 'react'

type Props = {
    text: string;
}

export default function SectionHeadingTextAtom(props: Props) {
  const text = props.text.toUpperCase();

  return (
    <div className='relative'>
      <h1 className='font-outline-2 text-5xl font-bold text-white opacity-10'>
        {text}
      </h1>
      <p className='absolute bottom-0 left-1 font-medium'>{`// ${text}`}</p>
    </div>
  );
}
