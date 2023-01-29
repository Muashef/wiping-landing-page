import React from 'react';

// import icons
import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa';

const Accordion = ({ accordion, index, activeIndex, setActiveIndex }) => {
  // destructure accordion
  const { question, answer } = accordion;
  return (
    <div onClick={() => setActiveIndex(index)} className=' cursor-pointer'>
      <div className='bg-white border rounded-sm'>
        <div className='min-h-[68px] flex items-center justify-between px-[30px]'>
          <h6 className='h6'>{question}</h6>
          <div>
            {activeIndex == index ? (
              <FaChevronCircleUp className='text-[20px] text-neutral-500' />
            ) : (
              <FaChevronCircleDown className='text-[20px] text-neutral-500' />
            )}
          </div>
        </div>
        <div
          className={`${
            activeIndex == index ? 'min-h-[200px] lg:min-h-[160px]' : 'min-h-0'
          } max-h-0 overflow-hidden flex justify-center transition-all px-[30px]`}
        >
          <div className='mt-6'>{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;