import React from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

type Props = {
  testimonials: React.ComponentProps<typeof TestimonialCard>[];
  currentTestimonial: number;
};

// TODO - Add scroll animation
export default function TestimonialRender(props: Props) {
  return (
    <div className=''>
      <div className='md:grid hidden items-center grid-cols-2'>
        {props.testimonials
          .slice(props.currentTestimonial, props.currentTestimonial + 2)
          .map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
      </div>
      <div className='md:hidden'>
        <TestimonialCard {...props.testimonials[props.currentTestimonial]!} />
      </div>
    </div>
  );
}
