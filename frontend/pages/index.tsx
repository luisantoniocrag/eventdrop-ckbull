import { useState } from "react";
import { NextPage } from "next";
import { Modal } from "@/components/Auth/Modal";
import { useAppContext } from "@/contexts/AppContext";
import config from "../config"
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const router = useRouter();
  const { isAuthModalOpen, setIsModalOpen }: any = useAppContext();

  const onCreateDrop = () => {
    if (typeof window !== undefined) {
      const value = localStorage.getItem(config.localstorage.user)
      if (!!value) return router.push("/profile")
      return setIsModalOpen(true);
    }
  }

  return (
  
    <div className="bg-[#E6FEF2] w-full h-screen flex items-center">
      {isAuthModalOpen && <Modal/>}
      <div className="flex flex-col pl-12 max-w-[730px] -mt-12">
        <h3 className="text-[#1A4530] font-bold text-6xl">Make your events unforgettablewith POAPs</h3>
        <p className="text-[#1A4530] font-normal text-2xl mt-4 text-">Thanks to the use of POAPs, your attendees will be able to remember your event and share their attendance on networks.</p>
        <button className="mt-4 bg-[#67FAB0] py-2 px-12 rounded-full w-[400px] hover:opacity-90 active:scale-105">
          <p onClick={onCreateDrop} className="text-[#1A4530] font-bold text-xl">Create your first Drop</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
