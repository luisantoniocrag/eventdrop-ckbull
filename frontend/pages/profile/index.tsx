import { UserData } from "@/types/user";
import { userLogged } from "@/utils/jwt";
import jwt, { JwtPayload } from "jsonwebtoken";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import config from "../../config"
import { formatAddress } from "@/utils/format";
import BalanceBadge from "@/components/Balance/BalanceBadge";

const Profile: NextPage = () => {
    const [userInfo, _] = useState<UserData | null>(() => {
        if (userLogged()) {
            if (typeof window !== "undefined")
                return jwt.decode(String(window.localStorage.getItem(config.localstorage.user))) as UserData
        }
        return null
    });

    const router = useRouter()

    useEffect(() => {
        if (!userLogged()) router.push("/");
    }, []);

    useEffect(() => {
        console.log(userInfo)
    }, [userInfo]);

    const onGoToDrops = () => router.push("/drop")

    return (
        <>
            {userInfo !== null && (
                <div className="w-screen h-screen bg-gradient-to-b from-[#F7FAF8] to-[#ADFFC8] grid justify-center items-center relative">
                    <div className="absolute right-0 top-0">
                        <BalanceBadge address={String(userInfo?.address)} />
                    </div>
                    <div className="flex flex-col">
                        {userInfo && userInfo.address && (
                            <>
                                <h3 className="text-6xl text-[#1A4530] font-bold text-center mt-12 mb-4">Welcome {formatAddress(userInfo.address)}</h3>
                                <span className="text-sm text-[#1A4530] font-normal text-center mb-4">
                                    <a className="underline" href={`https://pudge.explorer.nervos.org/address/${userInfo.address}`} target="_blank">See in the block explorer</a>
                                </span>
                                <button onClick={onGoToDrops} className="mx-auto w-[350px] bg-[#1A4530] text-[#E6FEF2] text-xl font-bold flex justify-center items-center py-2 rounded-full hover:opacity-90 active:scale-105 my-4">Drops</button>
                                <button className="mx-auto w-[350px] bg-[#1A4530] text-[#E6FEF2] text-xl font-bold flex justify-center items-center py-2 rounded-full hover:opacity-90 active:scale-105">Explorer</button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default Profile;