import React from 'react'
import SVGAtom from '../SVGAtom/SVGAtom';

// interface ServiceProps {
//   index: string,
//   icon: string,
//   title: string,
//   description: string,
// };

// type Props = {
//     services: ServiceProps[];
// }

type Props = {
  index: string,
  icon: React.ComponentProps<typeof SVGAtom>['iconName'],
  title: string,
  description: string,
};

export default function ServiceAtom(props: Props) {
  return (
    <div className='grid grid-cols-7 items-center font-roboto py-7 border-b border-dashed last:border-none'>
      <div className='col-span-3 flex items-center gap-6'>
        <h1 className='font-outline-1 text-[54px] font-bold text-white'>
          {props.index}
        </h1>
        <div className='flex flex-col gap-2'>
          <SVGAtom iconName={props.icon} width={25.6} />
          <p className='text-sm'>{props.title}</p>
        </div>
      </div>
      <p className='col-span-4 text-base text-[#838485] font-sans'>{props.description}</p>
    </div>
  );
}
