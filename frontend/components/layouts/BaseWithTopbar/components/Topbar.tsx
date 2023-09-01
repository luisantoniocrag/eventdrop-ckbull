import { FC } from "react";
import { TopbarProps } from "../interfaces";

export const Topbar: FC<TopbarProps> = (props) => {
  const { title } = props;
  return (
    <div className="h-16 w-full flex justify-start items-center px-4 border-b">
      <img src="/eventDrop.png" className="h-5 w-5 mt-2.5 mr-2" />
      <h1 className="text-eventDropDark font-semibold text-xl">| {title}</h1>
      <div className="hidden md:flex flex-row-reverse flex-1">
        <label className="text-eventDropDark text-base md:text-lg font-semibold mr-4 cursor-pointer hover:scale-105">
          About
        </label>
        <label className="text-eventDropDark text-base md:text-lg font-semibold mr-4 cursor-pointer hover:scale-105">
          Create Drop
        </label>
      </div>
    </div>
  );
};
