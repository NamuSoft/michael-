import React from 'react'

type Props = {
    children: React.ReactNode,
    id: string,
}

export default function SectionWrapper(props: Props) {
  return (
    <div id={props.id} className='col-span-3 h-fit rounded-lg md:rounded-2xl bg-white px-5 md:px-12 py-12 shadow-lg'>
        {props.children}
    </div>
  )
}
