import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import PortfolioSectionModule from "~/components/Modules/PorfolioSection/PortfolioSectionModule";
import Sidebar from "../SideBar.tsx/Sidebar";
import AboutSectionModule from "~/components/Modules/AboutSection/AboutSectionModule";

type Props = {
  aboutSectionModuleProps: React.ComponentProps<typeof AboutSectionModule>;
  portfolioSectionModuleProps: React.ComponentProps<
    typeof PortfolioSectionModule
  >;
};

export const HomeTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100vh" }}>
      {/*
        <Header style={{ padding: 0, height: 50 }}>
          place for header module
        </Header>
      */}

      <Content style={{ overflow: "auto" }}>
        <div className='mx-auto max-w-[1300px] py-6'>
          <div className='mb-8 flex gap-4 text-7xl font-bold'>
            <h1>Christina</h1>
            <h1 className='font-outline-2 text-white'>Gray</h1>
          </div>
          <div className='grid grid-cols-4 gap-x-12 gap-y-6'>
            <div className='col-span-1'>
              <Sidebar />
            </div>
            <AboutSectionModule {...props.aboutSectionModuleProps} />
            <div className='col-span-1'></div>
            <PortfolioSectionModule {...props.portfolioSectionModuleProps} />
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
