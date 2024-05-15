import React from "react";
import { NavProps } from "../type";

export default function LeftItem({ title, description, link, icon }: NavProps) {
  return (
    <a
      href={link}
      className="group rounded-lg border border-transparent p-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 "
      rel="noopener noreferrer"
    >
        {icon}
    </a>
  );
}
