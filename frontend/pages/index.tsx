import { useState } from "react";
import { NextPage } from "next";
import { loginMethods } from "@/components/Home/utils";
import {
  Options,
  Email,
  Phone,
  CryptoWallet,
} from "@/components/Home/components";
import { LoginMethod } from "@/components/Home/interfaces";

const Login: NextPage = () => {
  const [currentMethod, setCurrentMethod] = useState<LoginMethod>("Email");
  const [translate, setTranslate] = useState<number>(0);

  const changeLoginMethod = (method: LoginMethod): void => {
    const methodSection: HTMLElement | null = document.getElementById(
      `Method_${method}`
    );

    if (methodSection) {
      const { width } = methodSection.getBoundingClientRect();
      const methodIndex: number = loginMethods.findIndex(
        (loginMethod) => loginMethod === method
      );
      setTranslate(-width * methodIndex);
      setCurrentMethod(method);
    }
  };

  return (
    <div className="w-full h-screen grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <div className="hidden md:block col-span-1 bg-eventDropLight" />
      <div className="mt-16 md:mt-0 col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 flex items-center px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="block w-full lg:w-2/4 h-full md:h-2/4">
          <div className="w-full h-20 flex items-center justify-center md:justify-start">
            <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-eventDropDark font-semibold">
              Sign in
            </h1>
          </div>
          <Options
            changeLoginMethod={changeLoginMethod}
            currentMethod={currentMethod}
          />
          <div className="mt-4 md:mt-6 w-full h-80 flex flex-row relative overflow-x-hidden ">
            <div
              className="w-full flex flex-row transition-all duration-500"
              style={{ translate }}
            >
              {loginMethods.map((loginMethod) => (
                <div
                  key={loginMethod}
                  id={`Method_${loginMethod}`}
                  className="min-w-full h-full"
                >
                  {loginMethod === "Crypto Wallet" && <CryptoWallet />}
                  {loginMethod === "Email" && <Email />}
                  {loginMethod === "Phone" && <Phone />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
