import React from "react";
import SectionHeadingTextAtom from "~/components/Atoms/SectionHeadingTextAtom/SectionHeaderAtom";
import PortfolioRender from "../../Components/PortfolioRender/PortfolioRender";
import SectionWrapper from "~/components/Components/SectionWrapper/SectionWrapper";

type Props = {
  heading: React.ComponentProps<typeof SectionHeadingTextAtom>;
  portfolio: React.ComponentProps<typeof PortfolioRender>;
};

export default function PortfolioSectionModule(props: Props) {
  return (
    <SectionWrapper id='portfolio'>
      <div className='relative flex w-full gap-12'>
        <div className='flex w-full flex-col gap-2 md:gap-4'>
          <SectionHeadingTextAtom text={props.heading.text} />
          <div className='section-h2'>
            <h2>My Latest Works</h2>
          </div>
          <p className='text-base text-[#838485]'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </div>
      <div className='mt-10'>
        <PortfolioRender {...props.portfolio} />
      </div>
    </SectionWrapper>
  );
}
