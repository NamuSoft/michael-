import React from "react";
import SectionHeadingTextAtom from "~/components/Atoms/SectionHeadingTextAtom/SectionHeaderAtom";
import PortfolioModule from "../PortfolioModule/PortfolioModule";
import PortfolioAtom from "~/components/Atoms/PorfolioAtom/PortfolioAtom";

type Props = {
  heading: React.ComponentProps<typeof SectionHeadingTextAtom>;
  portfolio: React.ComponentProps<typeof PortfolioModule>;
};

export default function PortfolioSectionModule(props: Props) {
  return (
    <div className='col-span-3 rounded-2xl bg-white p-12 shadow'>
      <div className='relative flex w-full gap-12'>
        <div className='flex w-full flex-col gap-4'>
          <SectionHeadingTextAtom text={props.heading.text} />
          <div className='text-[40px] font-bold'>
            <h2>My Latest Works</h2>
          </div>
          <p className='text-base text-[#838485]'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </div>
      <div className='mt-10'>
        <PortfolioModule {...props.portfolio} />
      </div>
    </div>
  );
}
