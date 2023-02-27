import { useEffect, useRef } from 'react';

const Testimonial = ({ text, author, image }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add('animate-fadeIn');
    }
  }, []);

  return (
    <div
      className="mx-4 max-w-md rounded-lg bg-white p-8 shadow-lg md:mx-0 md:p-12 lg:p-16"
      ref={ref}
    >
      <p className="mb-4 text-lg leading-relaxed">{text}</p>
      <div className="flex items-center">
        <img className="mr-4 h-10 w-10 rounded-full" src={image} alt={author} />
        <div>
          <p className="font-medium text-gray-700">{author}</p>
          <p className="text-sm text-gray-600">Customer</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
          Testimonials
        </h2>
        <div className="flex flex-col gap-16  md:flex-row md:justify-center">
          <Testimonial
            text="I had an amazing experience working with this company. The team was so helpful and responsive to my needs, and they delivered exactly what I wanted."
            author="John Smith"
            image="https://randomuser.me/api/portraits/men/2.jpg"
          />
          <Testimonial
            text="I highly recommend this company to anyone looking for high-quality products and exceptional customer service. They truly go above and beyond for their clients."
            author="Jane Doe"
            image="https://randomuser.me/api/portraits/women/2.jpg"
          />
        </div>
      </div>
    </section>
  );
};

const BrandSection = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
          Trusted by These Brands
        </h2>
        <div className="flex flex-wrap items-center justify-center">
          <img
            className="mx-8 my-4 h-10 md:h-16"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <img
            className="mx-8 my-4 h-10 md:h-16"
            src="https://tailwindui.com/img/logos/tuple-logo-indigo-600.svg"
            alt="Tuple"
          />
          <img
            className="mx-8 my-4 h-10 md:h-16"
            src="https://tailwindui.com/img/logos/mirage-logo-indigo-600.svg"
            alt="Mirage"
          />
          <img
            className="mx-8 my-4 h-10 md:h-16"
            src="https://tailwindui.com/img/logos/statickit-logo-indigo-600.svg"
            alt="StaticKit"
          />
        </div>
      </div>
    </section>
  );
};

export const TestimonialsAndBrandSection = () => {
  return (
    <>
      <TestimonialsSection />
      <BrandSection />
    </>
  );
};
