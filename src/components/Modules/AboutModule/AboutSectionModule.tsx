import { Image } from "antd";
import React from "react";
import CredentialAtom from "~/components/Atoms/CredentialAtom/CredentialAtom";
import SectionHeadingTextAtom from "~/components/Atoms/SectionHeadingTextAtom/SectionHeaderAtom";
import SkillTagAtom from "~/components/Atoms/SkillTagAtom/SkillTagAtom";
import TypingText from "~/components/Components/TypingText/TypingText";

type Props = {
  skills: React.ComponentProps<typeof SkillTagAtom>[];
  credentials: React.ComponentProps<typeof CredentialAtom>[];
  intro: React.ComponentProps<typeof TypingText>;
  heading: React.ComponentProps<typeof SectionHeadingTextAtom>;
};

export default function AboutSectionModule(props: Props) {
  return (
    <div className='col-span-3 h-fit rounded-2xl bg-white p-12 shadow'>
      <div className='relative flex w-full gap-12'>
        <Image
          src='/images/hero-avatar.webp'
          alt='Hero Avatar'
          preview={false}
          className='h-64 min-w-64 rounded-full'
        />
        <div className='absolute bottom-16'>
          <TypingText {...props.intro} />
        </div>
        <div className='flex w-full flex-col gap-4'>
          <SectionHeadingTextAtom text={props.heading.text} />
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