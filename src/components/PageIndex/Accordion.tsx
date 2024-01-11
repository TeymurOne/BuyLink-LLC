import React, { useState } from 'react';
import { HiMinus } from 'react-icons/hi2';
import { AiOutlinePlus } from 'react-icons/ai';

const Accordion = () => {
  const faqItems = [
    {
      question: 'What is the BUYLINK?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elm, quis nostrud exercitation ullamco laboris nisi',
    },
    {
      question: 'Why do we use it??',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elm, quis nostrud exercitation ullamco laboris nisi',
    },
    {
      question: 'How it works??',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elm, quis nostrud exercitation ullamco laboris nisi',
    },
    {
      question: 'How to get cash??',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elm, quis nostrud exercitation ullamco laboris nisi',
    },
  ];
  const [showItems, setShowItems] = useState<boolean[]>(faqItems.map(()=>true));
  const handleShow = (index:number) => {
    const updatedShowItems = [...showItems];
    updatedShowItems[index] = !updatedShowItems[index];
    setShowItems(updatedShowItems);
    
    

  
  };

  return (
    <section className="h-auto py-20 mx-auto max-w-[1370px]" id='faq'>
      <div className="flex justify-between flex-wrap">
        <div className="w-[30%]  pr-4">
          <h2 className="text-[60px] leading-[80px] font-bold text-[#000000DE]">
            Frequently Asked Questions
          </h2>
        </div>
        <div className=' max-w-[764px] w-full px-4 '>
          {faqItems.map((item, index: number) => {
            return (
              <div
                key={index}
                className="py-2  border-b-[1px] flex justify-between items-center border-[#C4C4C4 ] w-full pb-2   "
              >
                <div className="w-[618px]">
                  <h2 className="lg:text-[40px] sm:text-[25px] md:text-[32px] text-[#000000de] font-bold">
                    {item.question}
                  </h2>
                  <p
                    className={`text-[24px] ${
                      showItems[index]
                        ? 'overflow-hidden   opacity-0 h-0 transition-all duration-900   pt-0 pb-0 '
                        : 'pt-8  pb-6 h-auto opacity-100 '
                    } transition-all duration-500  font-normal normal`}
                  >
                    {item.answer}
                  </p>
                </div>
                <button onClick={() => handleShow(index)}>
                  {showItems[index] ? (
                    <AiOutlinePlus style={{ height: '100px', width: '40px' }} />
                  ) : (
                    <HiMinus style={{ height: '100px', width: '40px' }} />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
