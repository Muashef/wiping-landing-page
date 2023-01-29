import React, { useState } from 'react';

// import data
import { faq } from '../data';

// import components
import Accordion from './Accordion';

const Faq = () => {
  // destructure faq data
  const { accordions } = faq;
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <section className='faq h-fit  py-[80px] lg:py-[80px] lg:mb-0'>
      <div className='max-w-[768px] mx-auto lg:bg-faq bg-no-repeat bg-custom bg-center lg:h-[700px] lg:pt-6'>
        {/* section title */}
        <div
          className='section-title-group flex flex-col items-center justify-center pb-10 space-x-4 lg:max-w-[540px] mx-auto px-4 lg:px-0'
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-delay='200'
        >
          <h1 className='text-[#2F80ED] text-4xl font-bold mb-3'>FAQs</h1>
          <p className='text-[background: #303030;
] text-sm font-semibold'>Frequently Asked Questions on our Services</p>
        </div>
        {/* accordion list */}
        <div
          className='flex flex-col gap-y-4 px-4 mb-[100px]'
          data-aos='fade-up'
          data-aos-offset='300'
          data-aos-delay='200'
        >
          {accordions.map((accordion, idx) => {
            return <Accordion accordion={accordion} index={idx} activeIndex={activeIndex} setActiveIndex={setActiveIndex} key={idx} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;