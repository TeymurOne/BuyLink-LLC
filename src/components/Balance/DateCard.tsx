import React from "react"

interface Date{
    svg?:string, 
    month?:string,
    desc?:string,
    day?:string
    daytext?:string
}


const DateCard:React.FC<Date> = ({svg,month, desc, day, daytext}) => {
  
  return (
    <>
      <div className="flex space-x-4 pl-4 items-center py-5 w-full rounded-xl shadow dark:bg-boxdark border bg-transparent border-black border-opacity-60">
      <div>
        <svg
          width="60"
          height="61"
          viewBox="0 0 60 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.5" width="60" height="60" rx="30" fill={svg} />
          <path
            d="M45 32.1667C45 40.4509 38.2843 47.1667 30 47.1667C21.7157 47.1667 15 40.4509 15 32.1667C15 23.8824 21.7157 17.1667 30 17.1667C38.2843 17.1667 45 23.8824 45 32.1667Z"
            stroke="white"
            strokeWidth="1.5"
          />
          <path
            d="M30 32.1667V25.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.6667 13.8333H33.3333"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <div className="text-black dark:text-white text-sm font-semibold">
          {month}
        </div>
        <span className="xl:text-2xl text-xl dark:text-white font-medium font-roboto">
          {day} {daytext}
        </span>
        <span>{desc}</span>
      </div>
    </div>
      
    </>
  )
}

export default DateCard
