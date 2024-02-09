import { useState } from 'react';
import { HiMinus } from 'react-icons/hi2';
import { AiOutlinePlus } from 'react-icons/ai';

const Accordion = () => {
  interface Ifaqitems {
    id: number;
    question: string;
    answer: string;
  }
  const faqItems: Ifaqitems[] = [
    {
      id: 1,
      question: 'What is the BUYLINK?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elm, quis nostrud exercitation ullamco laboris nisi',
    },
    {
      id: 2,
      question: 'Why do we use it??',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elm, quis nostrud exercitation ullamco laboris nisi',
    },
    {
      id: 3,
      question: 'How it works??',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elm, quis nostrud exercitation ullamco laboris nisi',
    },
    {
      id: 4,
      question: 'How to get cash??',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elm, quis nostrud exercitation ullamco laboris nisi',
    },
  ];
  const [curOpen, setCurOpen] = useState<any>(null);

  return (
    <section className="h-auto  mx-auto max-w-[1370px]">
      <h2 className="text-center  font-manrope  lg:text-[40px] text-[30px]      leading-8  text-black font-bold">
        Frequently Asked Questions
      </h2>
      <div className="flex justify-between flex-wrap">
        <div className=" w-full mt-10 px-4 ">
          {faqItems.map((item, index) => {
            return (
              <AccordionItem
                num={item.id}
                key={index}
                question={item.question}
                ansver={item.answer}
                curOpen={curOpen}
                setCurOpen={setCurOpen}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Accordion;

function AccordionItem({ num, question, ansver, curOpen, setCurOpen }: any) {
  const isOpen = num === curOpen;
  function handleToggle() {
    setCurOpen(isOpen ? null : num);
  }

  return (
    <>
      <div
        onClick={handleToggle}
        className=" cursor-pointer h-auto  border-b-[1px]  border-[#C4C4C4 ] border-opacity-[20%]   flex justify-between items-center  w-full pb-2   "
      >
        <div className="w-full  ">
          <div className="flex items-center justify-between h-[80px]">
            <h2 className="lg:text-[28px] py-3 font-manrope text-[20px]  normmal text-[#4C5DF5] font-semibold">
              {question}
            </h2>
            <button onClick={handleToggle}>
              {isOpen ? (
                <HiMinus style={{ height: '50px', width: '30px' }} />
              ) : (
                <AiOutlinePlus
                  onClick={handleToggle}
                  style={{ height: '50px', width: '30px' }}
                />
              )}
            </button>
          </div>

          <p
            id="transition"
            className={`text-[20px] h-0      overflow-hidden font-poppins    '
               ${isOpen && 'lg:pb-10 pb-30 md:pb-16   ' }`}
          >
            {ansver}
          </p>
        </div>
        
      </div>
    </>
  );
}
