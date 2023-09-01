import { useState, ChangeEvent } from "react";
import { NextPage } from "next";
import { isAddress } from "ethers";
import { BaseWithTopbar } from "@/components/layouts";

const base: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Explorer: NextPage = () => {
  const [key, setKey] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setKey(e.target.value);
    if (isAddress(e.target.value)) {
      console.log("Desactivado");
    } else {
      console.log("llama API");
    }
  };

  const search = (): void => {
    console.log(key);
  };

  const comproveAddress = (): boolean => key.length > 0 && !isAddress(key);

  return (
    <BaseWithTopbar
      title="POAP Explorer"
      tailwindStyle="h-[calc(100%-64px)] max-w-7xl mx-auto flex items-center"
    >
      <div className="flex flex-col justify-start items-start h-full md:h-2/4 w-full pt-0 md:mt-0">
        <h1 className="text-xl md:text-2xl xl:text-4xl font-bold text-eventDropDark px-6 pt-8 md:pt-0">
          POAP Explorer
        </h1>
        <h2 className="text-lg md:text-xl xl:text-3xl font-semibold text-eventDropDark mt-3 px-6">
          Find by Address, CNS or Drop Name
        </h2>
        <div className="flex flex-col w-full h-full pt-6 md:pt-10 bg-gradient-to-t from-[#AFFFC9] px-6">
          <input
            onChange={(e) => onChange(e)}
            value={key}
            placeholder="0x123...or...yourname.conflux...or...drop name"
            className={`border-4 border-eventDropDark w-full mt-2 text-lg md:text-xl pl-2 md:pl-36 pr-2 py-4 font-semibold ${
              comproveAddress() ? "rounded-t-xl" : "rounded-xl"
            }`}
          />
          {comproveAddress() && (
            <div className="flex flex-col max-h-[50%] md:max-h-[150px] overflow-y-auto bg-white border-x-4 border-b-4 border-eventDropDark">
              {base.map((result) => (
                <div
                  key={result}
                  className="w-full min-h-[64px] flex flex-row border-b hover:bg-gray-50 cursor-pointer"
                >
                  <div className="w-36 hidden md:flex items-center justify-center">
                    <div className="w-10 h-10 bg-eventDropDark rounded-full" />
                  </div>
                  <div className="flex flex-col justify-center items-start pl-2 md:pl-0">
                    <label className="text-lg text-eventDropDark font-semibold">
                      Conflix Poap #{result}
                    </label>
                    <label className="text-sm text-eventDropDark font-semibold">
                      August 19, 2023, Chicago
                    </label>
                  </div>
                </div>
              ))}
            </div>
          )}
          <button
            onClick={search}
            className="py-3 px-6 bg-eventDropDark rounded-2xl text-white font-bold w-full md:w-1/3 mx-auto mt-8 md:mt-12 text-lg md:text-xl xl:text-2xl"
          >
            Search
          </button>
        </div>
      </div>
    </BaseWithTopbar>
  );
};

export default Explorer;
