import React from "react";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  name: string;
  level: number;
  icon: React.ComponentProps<typeof SVGAtom>["iconName"];
};

export default function SkillTagAtom(props: Props) {
  return (
    <div className='flex items-center gap-2 rounded-full border border-dashed border-black px-4 py-2 opacity-50 transition-opacity duration-100 hover:opacity-100'>
      <SVGAtom iconName={props.icon} height={20} width={20} />
      <h6 className='text-lg'>{props.name}</h6>
      <span className='-ml-2'>({props.level}%)</span>
    </div>
  );
}
