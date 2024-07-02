import React from "react";
import type CredentialAtom from "~/components/Atoms/CredentialAtom/CredentialAtom";
import type SkillTagAtom from "~/components/Atoms/SVGAtom/SkillTagAtom/SkillTagAtom";
import Sidebar from "~/components/SideBar.tsx/Sidebar";
import HeroSectionModule from "../HeroSection/HeroSectionModule";

type Props = {
  skills: React.ComponentProps<typeof SkillTagAtom>[],
  credentials: React.ComponentProps<typeof CredentialAtom>[],
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
        <HeroSectionModule {...props } />
      </div>
    </div>
  );
};
