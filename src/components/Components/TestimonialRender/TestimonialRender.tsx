import TestimonialCard from "../TestimonialCard/TestimonialCard";

type Props = {
  testimonials: React.ComponentProps<typeof TestimonialCard>[];
  currentTestimonial: number,
};

// TODO - Add scroll animation
export default function TestimonialRender(props: Props) {
  return (
    <div className='grid grid-cols-2 items-center'>
      {props.testimonials.slice(props.currentTestimonial, props.currentTestimonial + 2).map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  );
}
