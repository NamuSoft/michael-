import { Image } from "antd";
import React from "react";
import SkillTagAtom from "~/components/Atoms/SVGAtom/SkillTagAtom/SkillTagAtom";
import Sidebar from "~/components/SideBar.tsx/Sidebar";

type Props = {
  skills: React.ComponentProps<typeof SkillTagAtom>[];
};

export const HomeContentModule = (props: Props) => {
  return (
    <div className='mx-auto max-w-[1300px] py-6'>
      <div className='mb-8 flex gap-4 text-7xl font-bold'>
        <h1>Christina</h1>
        <h1 className='font-outline-2 text-white'>Gray</h1>
      </div>
      <div className='grid grid-cols-4 gap-12'>
        <div className='col-span-1'>
          <Sidebar />
        </div>
        <div className='col-span-3 rounded-2xl bg-white p-12 shadow'>
          <div className='flex w-full gap-12'>
            <Image
              src='/images/hero-avatar.webp'
              alt='Hero Avatar'
              preview={false}
              className='h-64 min-w-64 rounded-full'
            />
            <div className='flex w-full flex-col gap-4'>
              <div className='relative'>
                <h1 className='font-outline-2 text-5xl font-bold text-white opacity-10'>
                  ABOUT ME
                </h1>
                <p className='absolute bottom-0 left-1 font-medium'>
                  {"// ABOUT ME"}
                </p>
              </div>
              <div className='text-[40px] font-bold'>
                <h2>UI & UX Designer.</h2>
                <h2 className='-mt-2'>Photographer</h2>
              </div>
              <div className='flex items-center justify-between'>
                {props.skills.map((skill, index) => (
                  <SkillTagAtom key={index} {...skill} />
                ))}
              </div>
              <p className="text-[#838485] text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-[56px] font-bold font-roboto text-white font-outline-2">12</h1>
              <div>
                <p className="text-2xl font-bold">+</p>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
