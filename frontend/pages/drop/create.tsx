import { useState } from "react";
import { Toggle } from "@/components";

const Create = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="h-16 w-full flex justify-start items-center mb-8 md:mb-12 px-4 border-b">
        <img src="/eventDrop.png" className="h-5 w-5 mt-2.5 mr-2" />
        <h1 className="text-eventDropDark font-semibold text-xl">
          | Create your drop
        </h1>
      </div>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-6">
        <div className="col-span-2 px-8 md:px-12">
          <div className="border-2 border-eventDropDark w-full aspect-square rounded-xl p-6">
            <div className="transition-all duration-500 hover:scale-105 cursor-pointer border border-eventDropDark border-dashed bg-eventDropLight w-full h-full rounded-2xl relative flex justify-center items-center">
              <img src="/Isolation_Mode.png" />
              <div className="absolute py-2 px-6 bg-eventDropDark rounded-full text-white font-semibold">
                Select Image
              </div>
            </div>
          </div>
          <div className="border border-eventDropDark bg-eventDropLight flex mt-4 px-4 py-4 rounded-xl">
            <div className="flex pr-2 min-h-full items-start justify-center">
              <div className="w-6 h-6 bg-[#67FAB0] border rounded-full" />
            </div>
            <div className="flex flex-1">
              <p className="text-xs font-normal text-eventDropDark">
                <span className="font-semibold">Recomended</span> for optional
                performance 500x500px, rounded shape, less than 200KB, Animated
                pngs are not supported. Use of gif format recommended
              </p>
            </div>
          </div>
          <div className="mt-4 text-2xl">
            <h1>POAP Design</h1>
            <div className="flex h-12 mt-2 items-center">
              <div className="w-10 h-10 bg-eventDropDark rounded-xl mr-3" />
              <div className="w-10 h-10 bg-eventDropLight rounded-xl border border-eventDropDark mr-3" />
              <div className="w-10 h-10 bg-eventDropLight rounded-xl border border-eventDropDark mr-3" />
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-4 px-8 overflow-y-auto pb-52 mt-6 md:mt-0">
          <form className="flex flex-col">
            <label className="text-lg md:text-xl font-semibold text-eventDropDark">
              Title*
            </label>
            <input className="border-2 border-eventDropDark w-full h-10 rounded-xl mt-2" />
            <label className="text-lg md:text-xl font-semibold text-eventDropDark mt-4">
              Description
            </label>
            <textarea
              rows={5}
              cols={33}
              className="border-2 border-eventDropDark w-full rounded-xl mt-2"
            />
            <label className="text-lg md:text-xl font-semibold text-eventDropDark mt-4">
              Links*
            </label>
            <label className="text-sm md:text-base font-semibold text-eventDropDark">
              Add links as twitter, facebook, discord or custom url pages
            </label>
            <div className="flex justify-center items-center mt-6">
              <button
                type="button"
                className="py-3 px-6 rounded-2xl w-[240px] mr-6 border-2 border-eventDropDark text-eventDropDark font-bold"
              >
                Add Links
              </button>
            </div>
            <label className="text-lg md:text-xl font-semibold text-eventDropDark mt-6">
              Event Date*
            </label>
            <div className="mt-4 border-2 border-eventDropDark h-12 rounded-xl flex items-center justify-center text-lg text-eventDropDark font-semibold">
              Click to select start and end date
            </div>
            <label className="text-lg md:text-xl font-semibold text-eventDropDark mt-6">
              Event Type*
            </label>
            <div className="mt-4 border-2 border-eventDropDark h-12 rounded-xl grid grid-cols-2 text-lg text-eventDropDark overflow-hidden">
              <div className="cols-span-1 flex items-center justify-center bg-eventDropLight border-r-2 border-eventDropDark rounded-lg">
                <label className="text-base md:text-lg text-eventDropDark font-bold">
                  In-person
                </label>
              </div>
              <div className="cols-span-1 flex items-center justify-center">
                <label className="text-base md:text-lg text-eventDropDark font-semibold">
                  Virtual
                </label>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <label className="text-base md:text-lg font-semibold text-[#67FAB0] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                Unlockable content
              </label>
              <Toggle isChecked={isChecked} setIsChecked={setIsChecked} />
            </div>
            <div className="border-2 border-eventDropDark w-full h-24 rounded-xl mt-8 px-4 pt-3">
              <label className="text-lg font-bold">
                Digital key, code to redeem, event access code, link to a
                file...
              </label>
            </div>
            <div className="grid grid-cols md:grid-cols-3 mt-8">
              <div className="cols-span-1 flex flex-col px-2">
                <label className="text-base md:text-lg text-eventDropDark font-bold">
                  Transferable*
                </label>
                <div className="mt-4 border-2 border-eventDropDark h-12 rounded-xl grid grid-cols-2 text-lg text-eventDropDark overflow-hidden">
                  <div className="cols-span-1 flex items-center justify-center bg-eventDropLight border-r-2 border-eventDropDark rounded-lg">
                    <label className="text-base md:text-lg text-eventDropDark font-bold">
                      Yes
                    </label>
                  </div>
                  <div className="cols-span-1 flex items-center justify-center">
                    <label className="text-base md:text-lg text-eventDropDark font-semibold">
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="cols-span-1 flex flex-col px-2 mt-4 md:mt-0">
                <label className="text-base md:text-lg text-eventDropDark font-bold">
                  Visibility*
                </label>
                <div className="mt-4 border-2 border-eventDropDark h-12 rounded-xl grid grid-cols-2 text-lg text-eventDropDark overflow-hidden">
                  <div className="cols-span-1 flex items-center justify-center bg-eventDropLight border-r-2 border-eventDropDark rounded-lg">
                    <label className="text-base md:text-lg text-eventDropDark font-bold">
                      Public
                    </label>
                  </div>
                  <div className="cols-span-1 flex items-center justify-center">
                    <label className="text-base md:text-lg text-eventDropDark font-semibold">
                      Private
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full fixed left-0 bottom-0 h-24 border bg-eventDropLight flex justify-between md:justify-end items-center px-8 ">
        <button className="py-3 px-6 bg-eventDropLight rounded-2xl w-[140px] mr-0 md:mr-6 border-2 border-eventDropDark text-eventDropDark font-bold">
          Cancel
        </button>
        <button
          type="button"
          className="py-3 px-6 bg-eventDropDark rounded-2xl text-white font-bold w-[140px]"
        >
          Create Drop
        </button>
      </div>
    </div>
  );
};

export default Create;