import React, { ReactNode } from "react";

interface formProps {
  title: string;
  htmlFor: string;
  children: ReactNode;
}
export default function FormItem({ title, htmlFor, children }: formProps) {
  return (
    <div className="py-2 relative">
      {children}
      <label
        htmlFor={htmlFor}
        className="block px-2 bg-white dark:bg-black dark:!text-white ease-in-out duration-300 absolute top-0 peer-[:placeholder-shown]:bg-transparent peer-[:placeholder-shown]:px-0 peer-[:placeholder-shown]:top-[50%] peer-[:placeholder-shown]:-translate-y-[50%] mb-2 block text-sm font-medium  left-2   z-10"
      >
        {title}
      </label>
    </div>
  );
}
