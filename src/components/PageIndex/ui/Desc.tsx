import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  size?: string,
  marginTop?: string,
  justify?: any;
}

export default function Desc({ children, size, justify, marginTop }: TitleProps) {
  return (
    <>
      <p style={{ fontSize: size,  textAlign:justify, marginTop:marginTop}} className={`font-poppins leading-5 text-center text-[#000000ad] font-normal`}>
        {children}
      </p>
    </>
  );
}
