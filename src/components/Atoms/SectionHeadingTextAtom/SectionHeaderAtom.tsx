import React from "react";

type Props = {
  text: string;
  bgText?: string
};

export default function SectionHeadingTextAtom(props: Props) {
  return (
    <div className='relative'>
      <h1 className='font-outline-2 text-[40px] font-bold text-white opacity-10'>
        {props.bgText ?? props.text}
      </h1>
      <p className='absolute bottom-2 left-1 font-medium'>{`// ${props.text}`}</p>
    </div>
  );
}
