import React from "react";
import SectionHeadingTextAtom from "~/components/Atoms/SectionHeadingTextAtom/SectionHeaderAtom";
import SectionWrapper from "~/components/Components/SectionWrapper/SectionWrapper";
import ServicesRender from "~/components/Components/ServicesRender/ServicesRender";

type Props = {
  heading: React.ComponentProps<typeof SectionHeadingTextAtom>;
  service: React.ComponentProps<typeof ServicesRender>;
};

export default function ServicesSectionModule(props: Props) {
  return (
    <SectionWrapper id='services'>
      <div className='relative flex w-full gap-12'>
        <div className='flex w-full flex-col gap-4'>
          <SectionHeadingTextAtom text={props.heading.text} />
          <div className='section-h2'>
            <h2>What I Do</h2>
          </div>
          <p className='max-w-[568px] text-base text-[#838485]'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </div>
      <div>
        <ServicesRender {...props.service} />
      </div>
    </SectionWrapper>
  );
}
