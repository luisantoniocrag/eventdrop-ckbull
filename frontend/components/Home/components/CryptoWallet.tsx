import { FC } from "react";

export const CryptoWallet: FC = () => {
  return (
    <div className="w-full h-full flex flex-row overflow-hidden">
      <div className="w-full flex flex-row transition-all duration-500">
        <div className="min-w-full h-full flex flex-col">
          <label className="text-base md:text-lg lg:text-xl font-semibold text-eventDropDark">
            Select your browser wallet
          </label>
          <div className="flex flex-col">
            <div className="flex flex-row rounded-xl border border-eventDropDark mt-4 py-0.5">
              <div className="w-16 md:w-24 h-full flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-gray-200" />
              </div>
              <div className="flex flex-1 h-full">
                <label className="text-base md:text-lg font-semibold text-eventDropDark">
                  MetaMask
                </label>
              </div>
            </div>
            <div className="flex flex-row rounded-xl border border-eventDropDark mt-4 py-0.5">
              <div className="w-16 md:w-24 h-full flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-gray-200" />
              </div>
              <div className="flex flex-1 h-full">
                <label className="text-base md:text-lg font-semibold text-eventDropDark">
                  Fluent Wallet
                </label>
              </div>
            </div>
            <div className="flex flex-row rounded-xl border border-eventDropDark mt-4 py-0.5">
              <div className="w-16 md:w-24 h-full flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-gray-200" />
              </div>
              <div className="flex flex-1 h-full">
                <label className="text-base md:text-lg font-semibold text-eventDropDark">
                  Wallet Connect
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
