import React from "react";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import UserAtom from "~/components/Atoms/UserAtom/UserAtom";

type Props = {
  message: string;
  rating: number;
  user: React.ComponentProps<typeof UserAtom>;
};

export default function TestimonialCard(props: Props) {
  return (
    <div className='relative mx-auto max-w-sm rounded-lg bg-white'>
        <SVGAtom iconName='quotation' className='absolute text-[#838485] w-11 opacity-10' />
      <div className='flex items-center'>
        <div className='ml-2'>
          <div className='flex items-center mt-6 ml-2'>
            {Array.from({length: props.rating}).map((_, i) => (
              <SVGAtom
                iconName='star'
                key={i}
                width={16}
                className='text-[#ffb657]'
              />
            ))}
          </div>
        </div>
      </div>
      <p className='mt-4 text-[#838485]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean massa.
        Cum sociis natoque penatibus et magnis.
      </p>
      <div className='mt-4'>
        <UserAtom {...props.user} />
      </div>
    </div>
  );
}
