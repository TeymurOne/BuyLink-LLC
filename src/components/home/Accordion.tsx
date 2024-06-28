import { useState } from 'react';
import { HiMinus } from 'react-icons/hi2';
import { AiOutlinePlus } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

const Accordion = () => {
  const { t } = useTranslation();

  interface Ifaqitems {
    id: number;
    question: string;
    answer: string;
  }

  const faqItems: Ifaqitems[] = [
    {
      id: 1,
      question: t("accordion.1"),
      answer: t("accordion.2"),
    },
    {
      id: 2,
      question: t("accordion.3"),
      answer: t("accordion.4"),
    },
    {
      id: 3,
      question: t("accordion.5"),
      answer: t("accordion.6"),
    },
  ];

  const [curOpen, setCurOpen] = useState<any>(null);

  return (
    <section className="h-auto">
      <h2 className="text-center font-manrope lg:text-title-xxl text-3xl leading-8 text-black font-bold">
        Frequently Asked Questions
      </h2>
      <div className="flex justify-between flex-wrap">
        <div className="w-full mt-10 px-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              num={item.id}
              question={item.question}
              answer={item.answer}
              curOpen={curOpen}
              setCurOpen={setCurOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;

function AccordionItem({ num, question, answer, curOpen, setCurOpen }: any) {
  const isOpen = num === curOpen;

  function handleToggle() {
    setCurOpen(isOpen ? null : num);
  }

  return (
    <div
      onClick={handleToggle}
      className="cursor-pointer h-auto border-b-[1px] border-border2 border-opacity-[20%] flex justify-between items-center w-full pb-2"
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-20">
          <h2 className="lg:text-3xl py-3 font-manrope text-xl normal text-starrating font-semibold">
            {question}
          </h2>
          <button>
            {isOpen ? (
              <HiMinus style={{ height: '50px', width: '30px' }} />
            ) : (
              <AiOutlinePlus style={{ height: '50px', width: '30px' }} />
            )}
          </button>
        </div>
        <p
          id="transition"
          className={`text-xl h-0 overflow-hidden font-poppins ${isOpen && 'h-auto py-2'}`}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}
