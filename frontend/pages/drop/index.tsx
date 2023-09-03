import { userLogged } from "@/utils/jwt";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DropItem: React.FC = () => {
    return (
        <div></div>
    )
}

const Drop: NextPage = () => {
    const [drops, setDrops] = useState([]);

    const router = useRouter();

    useEffect(() => {
        if (!userLogged()) router.push("/");
    }, []);

    const onGoToCreateDrop = () => router.push("/drop/create")

    return (
        <div className="w-screen h-full pt-12">
            <div className="w-full h-full px-8 grid grid-cols-3">
                <div>
                    <h3 className="text-[#1A4530] font-bold text-4xl">Your Drops</h3>
                </div>
                <div className="col-span-2">
                    <h3 className="text-[#1A4530] font-normal text-2xl">You have {drops.length} drops</h3>
                    <div id="divider" className="w-full h-[2px] bg-[#00000048] my-4"></div>
                    {
                        drops.length <= 0 ?
                        <div className="w-full flex justify-center items-center my-12">
                            <span className="text-[#1A4530] font-normal text-2xl opacity-60 select-none">You don't have any event drop created 🥲</span> 
                        </div>:
                        <DropItem />
                    }
                    <div className="flex w-full h-auto justify-center items-center">
                        <button onClick={onGoToCreateDrop} className="w-full py-2 bg-[#1A4530] text-[#E6FEF2] rounded-full text-2xl hover:opacity-90 active:scale-105">Create new drop</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drop;