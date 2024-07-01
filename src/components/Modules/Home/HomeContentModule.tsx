import { Image } from "antd";
import Sidebar from "~/components/SideBar.tsx/Sidebar";

type Props = {
  title: string;
};

export const HomeContentModule = (props: Props) => {
  return (
    <div className='mx-auto max-w-[1400px] py-6'>
      <div className='mb-8 flex gap-4 text-7xl font-bold'>
        <h1>Christina</h1>
        <h1 className='font-outline-2 text-white'>Gray</h1>
      </div>
      <div className='grid grid-cols-4 gap-12'>
        <div className='col-span-1'>
          <Sidebar />
        </div>
        <div className='col-span-3 rounded-2xl p-12 shadow'>
          <div className='flex gap-12'>
            <Image
              src='/images/hero-avatar.webp'
              alt='Hero Avatar'
              preview={false}
              className='h-64 w-64 rounded-full'
            />
            <div className='flex flex-col gap-4'>
              <div className='relative'>
                <h1 className='font-outline-2 text-5xl font-bold text-white opacity-10'>
                  ABOUT ME
                </h1>
                <p className='absolute bottom-0 left-1 font-medium'>
                  // ABOUT ME
                </p>
              </div>
              <div className='text-[40px] font-bold'>
                <h2>UI & UX Designer.</h2>
                <h2 className="-mt-2">Photographer</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
