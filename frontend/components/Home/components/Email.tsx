import { FC, useState, ChangeEvent } from "react";
import Image from "next/image";
import { emailRegex, replaceQuotes } from "@/utils";

export const Email: FC = () => {
  const [translate, setTranslate] = useState<number>(0);
  const [email, setEmail] = useState<string>("");

  const backStep = (): void => setTranslate(0);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>): void =>
    setEmail(replaceQuotes(e.target.value));

  const sendLink = (): void => {
    const isValid = !emailRegex.test(email);

    if (isValid) {
      const stepSection: HTMLElement | null =
        document.getElementById("EmailSteps");

      if (stepSection) {
        const { width } = stepSection.getBoundingClientRect();
        setTranslate(-width);
      }
    }
  };

  return (
    <div
      id="EmailSteps"
      className="w-full h-full flex flex-row overflow-hidden"
    >
      <div
        className="w-full flex flex-row transition-all duration-500"
        style={{ translate }}
      >
        <div className="min-w-full h-full flex flex-col px-1">
          <label className="text-base md:text-lg lg:text-xl font-semibold text-eventDropDark">
            Enter you email to get a sing-in-link
          </label>
          <input
            value={email}
            onChange={(e) => onChangeEmail(e)}
            className="border border-eventDropDark w-full rounded-xl mt-4 md:mt-6 text-base md:text-lg px-2 md:px-4 py-1 md:py-2"
            placeholder="Put your email here"
          />
          <button
            onClick={sendLink}
            className="py-2 md:py-3 px-4 md:px-6 bg-eventDropDark rounded-2xl text-white text-base md:text-lg font-bold w-full mt-6 md:mt-8"
          >
            Send link
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
            An magic sign-in-link was sent to your email, check your inbox
          </label>
          <div className="mx-auto w-fit px-4 py-6 mt-4 md:mt-8 border-4 border-eventDropLight rounded-full">
            <Image src="/Frame.png" alt="PC image" width="150" height="150" />
          </div>
        </div>
      </div>
    </div>
  );
};
