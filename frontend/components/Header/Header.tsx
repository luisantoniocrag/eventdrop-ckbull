import { useRouter } from "next/router";

const Header: React.FC = () =>{

    const router = useRouter()
    const path = router.pathname as string
    console.log(path)

    const getHomeText: Record<string, string> = {
        "/": "Event Drop",
        "/profile": "User Profile",
        "/drop": "Your Drops",
        "/drop/create": "Create Your Drop",
    }

    return  (
        <div className="w-full h-[50px] border-b border-slate-200">
            <div className="w-full h-full flex justify-between">
                <div className="flex px-8 items-center">
                    <img className="w-8 h-8" src="/event-drop-icon.svg" alt="event-drop-icon" />
                    <div id="divider" className="w-[3px] h-[30px] bg-[#1A4530] mx-4"></div>
                    <h3 className="text-[#1A4530] font-bold text-lg">{getHomeText[path]}</h3>
                </div>
            </div>
        </div>
    )
}

export default Header;