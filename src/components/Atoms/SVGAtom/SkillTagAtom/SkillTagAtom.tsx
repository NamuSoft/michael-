import React from 'react'
import SVGAtom from '../../../Atoms/SVGAtom/SVGAtom'

type Props = {
  name: string;
  level: number;
  icon: "html5" | "bootstrap" | "search";
};

export default function SkillTagAtom(props: Props) {
  return (
    <div className='flex items-center gap-2 px-4 py-2 border-2 border-dotted border-black rounded-full opacity-50 hover:opacity-100 transition-opacity duration-100'>
      <SVGAtom iconName={props.icon} height={20} width={20} />
      <h6 className='text-lg'>{props.name}</h6>
      <span className='-ml-2'>({props.level}%)</span>
    </div>
  );
}
