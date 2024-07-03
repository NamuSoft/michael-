import React from 'react'
import NavigationButtonAtom from '~/components/Atoms/NavigationButton/NavigationButtonAtom';
import SectionHeadingTextAtom from '~/components/Atoms/SectionHeadingTextAtom/SectionHeaderAtom'

type Props = {
    heading: React.ComponentProps<typeof SectionHeadingTextAtom>,
}

export default function TestimonialSectionModule(props: Props) {
  return (
    <div className='col-span-3 rounded-2xl bg-white p-12 shadow'>
      <div className='relative flex w-full gap-12'>
        <div className='flex w-full justify-between items-center'>
          <SectionHeadingTextAtom {...props.heading} />
          <div className='flex gap-2'>
            <NavigationButtonAtom type='backward'/>
            <NavigationButtonAtom type="forward" />
          </div>
        </div>
      </div>
    </div>
  );
}
