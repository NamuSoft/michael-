import React from 'react'

type Props = {
    name: string,
    image: string,
    type: "Branding" | "Mockup",
}

export default function PortfolioAtom(props: Props) {
  return (
    <div className='group relative h-[420px] w-[420px] overflow-hidden rounded-lg'>
      <div
        className='absolute inset-0 bg-cover bg-center transition-transform delay-100 duration-300 ease-in-out group-hover:scale-110'
        style={{ backgroundImage: `url('/images/portfolio/${props.image}')` }}
      ></div>
      <div className='absolute h-full w-full bg-black bg-opacity-10 opacity-0 backdrop-blur-[2px] transition-all delay-100 duration-300 ease-in-out group-hover:opacity-100'>
        <h4 className='hover:remove-outline font-outline-white absolute bottom-0 mx-8 mb-8 translate-y-full transform font-poppins text-[40px] font-bold leading-tight  text-transparent transition-transform delay-100 duration-300 ease-in-out hover:text-white group-hover:translate-y-0'>
          {props.name}
        </h4>
      </div>
      <p className='absolute right-4 top-4 rounded-full bg-black bg-opacity-20 px-4 py-2 font-roboto text-white backdrop-blur-sm'>
        {props.type.toUpperCase()}
      </p>
    </div>
  );
}
