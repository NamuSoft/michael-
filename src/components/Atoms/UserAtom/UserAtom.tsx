import { Image } from 'antd';
import React from 'react'

type Props = {
    name: string,
    role: string,
    avatar: string,
}

export default function UserAtom(props: Props) {
  return (
    <div className='flex items-center'>
      <Image
        src={`/images/users/${props.avatar}`}
        width={70}
        className='rounded-full'
        alt={props.name}
        preview={false}
      />
      <div className='ml-4'>
        <p className='font-poppins text-lg font-medium'>{props.name}</p>
        <p className='text-[#838485]'>{props.role}</p>
      </div>
    </div>
  );
}