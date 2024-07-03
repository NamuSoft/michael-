import React from 'react'
import SVGAtom from '../SVGAtom/SVGAtom'

type Props = {
    type: 'forward' | 'backward',
    onClick?: () => void,
}

export default function NavigationButtonAtom(props: Props) {
  return (
    <button className='border border-dashed rounded-full h-10 w-10 flex items-center border-black justify-center hover:bg-black hover:text-white'><SVGAtom iconName={`${props.type}Arrow`} width={16} /></button>
  )
}
