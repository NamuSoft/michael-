import { Image } from "antd";
import React from "react";
import CredentialAtom from "~/components/Atoms/CredentialAtom/CredentialAtom";
import SkillTagAtom from "~/components/Atoms/SVGAtom/SkillTagAtom/SkillTagAtom";

type Props = {
  skills: React.ComponentProps<typeof SkillTagAtom>[];
  credentials: React.ComponentProps<typeof CredentialAtom>[];
};

export default function HeroSectionModule(props: Props) {
  return (
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
          <p className='text-base text-[#838485]'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </div>
      <div className='mt-1 flex items-center gap-20'>
        {props.credentials.map((credential, index) => (
          <CredentialAtom key={index} {...credential} />
        ))}
      </div>
    </div>
  );
}
