import React from 'react'
import NavigationButtonAtom from '~/components/Atoms/NavigationButton/NavigationButtonAtom';
import SectionHeadingTextAtom from '~/components/Atoms/SectionHeadingTextAtom/SectionHeaderAtom'
import SectionWrapper from '~/components/Components/SectionWrapper/SectionWrapper';
import TestimonialRender from '~/components/Components/TestimonialRender/TestimonialRender';

type Props = {
  heading: React.ComponentProps<typeof SectionHeadingTextAtom>;
  testimonial: React.ComponentProps<typeof TestimonialRender>;
  onNavigateForward: () => void;
  onNavigateBackward: () => void;
};

export default function TestimonialSectionModule(props: Props) {
  return (
    <SectionWrapper id='testimonial'>
      <div className='relative flex w-full gap-12'>
        <div className='flex w-full items-center justify-between'>
          <SectionHeadingTextAtom {...props.heading} />
          <div className='flex gap-2'>
            <NavigationButtonAtom
              type='backward'
              onClick={props.onNavigateBackward}
            />
            <NavigationButtonAtom
              type='forward'
              onClick={props.onNavigateForward}
            />
          </div>
        </div>
      </div>
      <TestimonialRender {...props.testimonial} />
    </SectionWrapper>
  );
}
// 00072