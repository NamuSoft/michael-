import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import PortfolioSectionModule from "~/components/Modules/PorfolioModule/PortfolioSectionModule";
import Sidebar from "../SideBar.tsx/Sidebar";
import AboutSectionModule from "~/components/Modules/AboutModule/AboutSectionModule";
import ServicesSectionModule from "~/components/Modules/ServicesModule/ServicesSectionModule";
import TestimonialSectionModule from "~/components/Modules/TestimonialModule/TestimonialSectionModule";
import React from "react";

type Props = {
  aboutSectionModuleProps: React.ComponentProps<typeof AboutSectionModule>;
  portfolioSectionModuleProps: React.ComponentProps<
    typeof PortfolioSectionModule
  >;
  servicesSectionModuleProps: React.ComponentProps<
    typeof ServicesSectionModule
  >;
  testimonialSectionModuleProps: React.ComponentProps<typeof TestimonialSectionModule>;
  sideBarComponentProps: React.ComponentProps<typeof Sidebar>;
};

export const HomeTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100vh" }}>
      {/*
        <Header style={{ padding: 0, height: 50 }}>
          place for header module
        </Header>
      */}

      <Content style={{ overflow: "auto", scrollBehavior: "smooth" }} className='relative'>
        <div id='about' className='mx-auto max-w-[1300px] px-3 py-6 md:px-0'>
          <div className='bg-[#f5f5f5] z-[999] -mt-6 pt-6 pb-2 w-full fixed mb-5 flex gap-4 text-[40px] font-bold md:static md:mb-8 md:text-7xl'>
            <h1>Christina</h1>
            <h1 className='font-outline-2 text-white'>Gray</h1>
          </div>
          <div className=''>
            <Sidebar {...props.sideBarComponentProps} />
          </div>
          <div className='grid-cols-4 gap-x-12 gap-y-3 md:gap-y-6 flex flex-col md:grid mt-32 md:mt-0 mb-6'>
            <div className='col-span-1'></div>
            <AboutSectionModule {...props.aboutSectionModuleProps} />
            <div className='col-span-1'></div>
            <PortfolioSectionModule {...props.portfolioSectionModuleProps} />
            <div className='col-span-1'></div>
            <ServicesSectionModule {...props.servicesSectionModuleProps} />
            <div className='col-span-1'></div>
            <TestimonialSectionModule
              {...props.testimonialSectionModuleProps}
            />
          </div>
        </div>
        {/* <HomeContentModule {...props.homeContentModuleProps } /> */}
      </Content>

      {/*
        <Footer style={{ padding: 0, minHeight: 50 }}>
          place for footer module
        </Footer>
      */}
    </Layout>
  );
};
