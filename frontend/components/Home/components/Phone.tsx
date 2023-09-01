import { FC, useState, ChangeEvent } from "react";
import { replaceQuotes } from "@/utils";

export const Phone: FC = () => {
  const [translate, setTranslate] = useState<number>(0);
  const [countryCode, setCountryCode] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const backStep = (): void => setTranslate(0);

  const onChangeCountryCode = (e: ChangeEvent<HTMLInputElement>): void =>
    setCountryCode(replaceQuotes(e.target.value));

  const onChangePhone = (e: ChangeEvent<HTMLInputElement>): void =>
    setPhone(replaceQuotes(e.target.value));

  const sendCode = (): void => {
    const isValid = true;

    if (isValid) {
      const stepSection: HTMLElement | null =
        document.getElementById("PhoneSteps");

      if (stepSection) {
        const { width } = stepSection.getBoundingClientRect();
        setTranslate(-width);
      }
    }
  };

  return (
    <div
      id="PhoneSteps"
      className="w-full h-full flex flex-row overflow-hidden"
    >
      <div
        className="w-full flex flex-row transition-all duration-500"
        style={{ translate }}
      >
        <div className="min-w-full h-full flex flex-col px-1">
          <label className="text-base md:text-lg lg:text-xl font-semibold text-eventDropDark">
            Enter your phone number in order to get your secret code
          </label>
          <div className="flex flex-row">
            <input
              value={countryCode}
              onChange={(e) => onChangeCountryCode(e)}
              className="border border-eventDropDark w-32 rounded-xl mt-4 md:mt-6 text-base md:text-lg px-2 md:px-4 py-1 md:py-2 mr-4"
              placeholder="+52"
            />
            <input
              value={phone}
              onChange={(e) => onChangePhone(e)}
              className="border border-eventDropDark w-full rounded-xl mt-4 md:mt-6 text-base md:text-lg px-2 md:px-4 py-1 md:py-2"
              placeholder="4444444444"
            />
          </div>
          <button
            onClick={sendCode}
            className="py-2 md:py-3 px-4 md:px-6 bg-eventDropDark rounded-2xl text-white text-base md:text-lg font-bold w-full mt-6 md:mt-8"
          >
            Send code
          </button>
        </div>
        <div className="min-w-full h-full flex flex-col">
          <label
            onClick={backStep}
            className="text-base md:text-lg lg:text-xl font-semibold text-eventDropDark cursor-pointer"
          >
            {`< back to the login menu`}
          </label>
          <label className="text-base md:text-lg lg:text-xl font-bold text-eventDropDark mt-4">
            A 6 digits code was sent to{" "}
            <span className="underline">+52 4444444444</span>
          </label>
          <div className="flex flex-row justify-between items-beetwen w-3/4 md:w-2/4 mt-6 mx-auto">
            <div className="w-10 h-10 border border-eventDropDark rounded-xl flex items-center justify-center text-eventDropDark font-bold">
              1
            </div>
            <div className="w-10 h-10 border border-eventDropDark rounded-xl flex items-center justify-center text-eventDropDark font-bold">
              2
            </div>
            <div className="w-10 h-10 border border-eventDropDark rounded-xl flex items-center justify-center text-eventDropDark font-bold">
              3
            </div>
            <div className="w-10 h-10 border border-eventDropDark rounded-xl flex items-center justify-center text-eventDropDark font-bold">
              4
            </div>
            <div className="w-10 h-10 border border-eventDropDark rounded-xl flex items-center justify-center text-eventDropDark font-bold">
              5
            </div>
            <div className="w-10 h-10 border border-eventDropDark rounded-xl flex items-center justify-center text-eventDropDark font-bold">
              6
            </div>
          </div>
          <button className="py-2 md:py-3 px-4 md:px-6 bg-eventDropDark rounded-2xl text-white text-base md:text-lg font-bold w-full mt-6 md:mt-8">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
