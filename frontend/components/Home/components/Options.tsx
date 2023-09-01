import { FC } from "react";
import { loginMethods } from "../utils";
import { OptionsProps } from "../interfaces/options";

export const Options: FC<OptionsProps> = (props) => {
  const { currentMethod, changeLoginMethod } = props;

  return (
    <div className="mt-2 w-full h-12 flex flex-row">
      {loginMethods.map((loginMethod) => (
        <div
          key={loginMethod}
          onClick={() => changeLoginMethod(loginMethod)}
          className={`px-6 h-full flex items-center border-b-4 cursor-pointer hover:bg-slate-100 transition-all duration-300 ${
            currentMethod === loginMethod
              ? "border-b-eventDropDark"
              : "border-transparent hover:border-b-eventDropLight"
          }  `}
        >
          <label className="text-sm md:text-base lg:text-lg xl:text-xl cursor-pointer font-semibold">
            {loginMethod}
          </label>
        </div>
      ))}
    </div>
  );
};
