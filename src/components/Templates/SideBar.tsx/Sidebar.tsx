import React from "react";
import SideBarLinkAtom from "~/components/Atoms/SideBarLink/SideBarLinkAtom";

type Props = {
  options: React.ComponentProps<typeof SideBarLinkAtom>[];
}

export default function Sidebar(props: Props) {
  return (
    <div className='fixed top-[86px] z-[999] bg-[#f5f5f5] md:top-auto'>
      <div className='flex w-11/12 flex-row items-center justify-center gap-7 rounded-lg bg-black px-10 py-3 md:w-[300px] md:flex-col md:items-stretch md:rounded-xl md:py-7'>
        {props.options.map((link, index) => (
          <SideBarLinkAtom key={index} {...link} />
        ))}
      </div>
    </div>
  );
};
