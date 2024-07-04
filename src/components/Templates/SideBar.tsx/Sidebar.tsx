import React from "react";
import SideBarLinkAtom from "~/components/Atoms/SideBarLink/SideBarLinkAtom";

type Props = {
  options: React.ComponentProps<typeof SideBarLinkAtom>[];
}

export default function Sidebar(props: Props) {
  return (
    <div className='fixed flex md:w-[300px] flex-row md:flex-col gap-7 rounded-lg w-11/12 items-center justify-center md:items-stretch md:rounded-xl bg-black px-10 py-3 md:py-7'>
      {props.options.map((link, index) => (
        <SideBarLinkAtom key={index} {...link} />
      ))}
    </div>
  );
};
