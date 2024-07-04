import Link from 'next/link';
import React from 'react'

type Props = {
  name: string;
  href: string;
  active: boolean;
};

export default function SideBarLinkAtom(props: Props) {
  return (
    <Link
      href={props.href}
      className='group items-center justify-between font-roboto text-[14px] text-[#FFFFFFB2] md:flex'
    >
      <p className='hidden group-hover:text-white md:block'>{props.name}</p>
      <p
        className={`rounded-full border-dashed h-6 w-6 flex items-center justify-center group-hover:text-white md:hidden ${props.active ? "border" : ""}`}
      >
        {props.name[0]}
      </p>
      <div
        className={`ml-2 hidden h-2 w-2 rounded-full bg-[#FFFFFFB2] group-hover:bg-white md:block ${props.active ? "hidden" : "block"}`}
      ></div>
      <div
        className={`animate-spin-slow ml-2 hidden h-8 w-8 rounded-full border border-dashed border-white ${!props.active ? "hidden" : "block"}`}
      ></div>
    </Link>
  );
}
