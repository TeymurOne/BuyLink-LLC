  import React, { ReactNode } from "react";
  interface TitleProps {
    children: ReactNode,
    color?: string,
    marginTop?: string,
    size?:string | undefined,
    start:string
  }
  export default function Title({ children, color = '#4C5DF5', start, size,   marginTop='10px' }:TitleProps) {
    const findSpan = (child:any) => {
      if (child && child.type === 'span') {
        return React.cloneElement(child, {
          style: { color , marginTop} 
        });
      }
      return child;
    };
    

    return (
      <>
        <h2 style={{fontSize:size}}  className={`font-manrope     lg:text-${start}   leading-8  text-black font-bold`}>
          {React.Children.map(children, findSpan)}
        </h2>
      </>
    );
  }
