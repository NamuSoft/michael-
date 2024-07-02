import React from 'react'
import { type Skill } from '../Modules/Home/HomeContentModule'
import SVGAtom from '../Atoms/SVGAtom/SVGAtom'

export default function SkillTag(skill: Skill) {
  return (
    <div className='flex items-center gap-2 px-4 py-2 border-2 border-dotted border-black rounded-full opacity-50 hover:opacity-100 transition-opacity duration-100'>
      <SVGAtom iconName={skill.icon} height={20} width={20} />
      <h6 className='text-lg'>{skill.name}</h6>
      <span className='-ml-2'>({skill.level}%)</span>
    </div>
  );
}
