import  { useState } from 'react';
import { HiMinus } from 'react-icons/hi2';
import { AiOutlinePlus } from 'react-icons/ai';
import Title from './ui/Title';

const Accordion = () => {
  interface Ifaqitems{
    id:number,
    question: string,
    answer:string    
  }
  const faqItems:Ifaqitems[] = [
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
  const [curOpen, setCurOpen] = useState<any>(null)

  return (
    <section className="h-auto  mx-auto max-w-[1370px]" >
      <h2 className='text-center  font-manrope  lg:text-[40px] text-[30px]      leading-8  text-black font-bold' >Frequently Asked Questions</h2>
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

function AccordionItem({ num, question, ansver, curOpen, setCurOpen }:any) {
  const isOpen = num === curOpen
  function handleToggle() {

    setCurOpen(isOpen? null:num)
  }

  return (
    <>
      <div
        onClick={handleToggle}
        className=" cursor-pointer h-auto  border-b-[1px] flex justify-between items-center opacity-90 border-[#C4C4C4 ] w-full pb-2   "
      >
        <div className="w-[618px]">
          <h2 className="lg:text-[36px] py-3 font-manrope text-[20px]  normmal text-[#4C5DF5] font-semibold">
            {question}
          </h2>
          {isOpen && (
            <p
              className="text-[20px]  overflow-hidden font-poppins    transition-all duration-900   '
                    py-6   h-auto opacity-100 "
            >
              {ansver}
            </p>
          )}
        </div>
        <button onClick={handleToggle}>
          {isOpen ? ( <HiMinus    style={{ height: '50px', width: '30px' }} />
          ) : (
            <AiOutlinePlus  onClick={handleToggle} style={{ height: '100px', width: '30px' }} />

          )}
        </button>
      </div>
    </>
  );
}
