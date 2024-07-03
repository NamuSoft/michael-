import Sidebar from "~/components/Templates/SideBar.tsx/Sidebar";
import HeroSectionModule from "../HeroSection/HeroSectionModule";
import React from "react";
import PortfolioSectionModule from "../PorfolioSection/PortfolioSectionModule";


type Props = {
  heroSectionModuleProps: React.ComponentProps<typeof HeroSectionModule>,
  portfolioSectionModuleProps: React.ComponentProps<typeof PortfolioSectionModule>
}

export const HomeContentModule = (props: Props) => {
  return (
    <div className='mx-auto max-w-[1300px] py-6'>
      <div className='mb-8 flex gap-4 text-7xl font-bold'>
        <h1>Christina</h1>
        <h1 className='font-outline-2 text-white'>Gray</h1>
      </div>
      <div className='grid grid-cols-4 gap-x-12 gap-y-6'>
        <div className='col-span-1'>
          <Sidebar />
        </div>
        <HeroSectionModule {...props.heroSectionModuleProps } />
        <div className="col-span-1"></div>
        <PortfolioSectionModule {...props.portfolioSectionModuleProps} />
      </div>
    </div>
  );
};
