import { userLogged } from "@/utils/jwt";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import config from "../../config";
import { UserData } from "@/types/user";
import jwt from "jsonwebtoken";
import axios from "axios";

const DropItem: React.FC<any> = ({drop}) => {
    const {name, poap_cid, start_date} = drop;
    return (
        <div className="w-full rounded p-2 border border-[#1A4530] my-4 hover:bg-[#E4FFE6] cursor-pointer">
            <div className="w-full h-full flex items-center">
                <img className="w-12 h-12 rounded-full" src={`https://white-graceful-weasel-882.mypinata.cloud/ipfs/${poap_cid}`} alt="poap" />
                <h5 className="ml-4 text-[#1A4530] font-bold text-xl">{name}</h5>
                <div className="ml-4 flex flex-row">
                    <span>Date: {start_date}</span>
                </div>
            </div>
        </div>
    );
};

const Drop: NextPage = () => {
    const [drops, setDrops] = useState([]);

    const router = useRouter();

    useEffect(() => {
        if (!userLogged()) router.push("/");
    }, []);

    useEffect(() => {
        console.log(getCreatorID())
        getUserDrops(parseInt(String(getCreatorID()), 10));
    },[]);

    const getUserDrops = async (creator_id:number) => {
        try { 
            const response = await axios({
                method: 'GET',
                url: `/drop?creator_id=${creator_id}`,
                baseURL: config.api_url_backend
            });
            console.log(response.data);
            setDrops(response.data.data);
            return response.data;
        } catch(e) {
            console.error(e)
        }
    };

    const getCreatorID = () => {
        if (typeof window !== undefined) {
          const jsonToken = localStorage.getItem(config.localstorage.user);
          if (!!jsonToken) {
            const user = jwt.decode(jsonToken) as UserData;
            return parseInt(String(user.id), 10);
          }
          return null;
        }
      }

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
                        drops.map((drop:any) => (
                            <DropItem key={drop.name} drop={drop} />
                        ))
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