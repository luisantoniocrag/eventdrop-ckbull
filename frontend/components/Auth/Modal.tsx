import { useState, useRef, useEffect, CSSProperties } from "react"
import { MoonLoader } from "react-spinners";

export function Modal() {
    const [menuTextSize, setMenuTextSize] = useState(0)
    const [isAuthenticating, setIsAuthenticating] = useState(true);

    const ref = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        if (ref.current) setMenuTextSize(ref.current.offsetWidth)
    }, [])


    const getAuthenticateMessage = () => {
        if (isAuthenticating) return "Autentication in progres..."
        return "Scan this QR code in your CKB Bull mobile app"
    }

    const overrideLoading: CSSProperties = {
        display: "block",
        margin: "30px auto",
      };

    return (
        <div className="w-screen h-screen fixed bg-[#4e574ee9] z-10 grid place-items-center">

            <div id="card" className="bg-[#E6FEF2] rounded-lg border p-12">

                <div id="card-header" className="w-full flex justify-between">
                    <h3 className="text-2xl text-[#1A4530] mr-48 font-bold">Authenticate</h3>
                    <div className="flex justify-center items-center">
                        <div id="item-dot" className="w-2 h-2 rounded-full bg-[#1A4530] self-center mr-2"></div>
                        <span className="text-[#1A4530] self-center font-light">Nervos Testent</span>
                    </div>
                </div>

                <div id="card-divider" className="my-8">
                    <span ref={ref} className="text-[#1A4530] font-bold text-sm">CKBull Wallet</span>
                    <div className="w-full h-1 relative my-2 z-0">
                        <div className="absolute w-full h-full bg-[#1a453030] left-0 top-0 z-10 rounded-sm"></div>
                        <div style={{ width: `${menuTextSize+5}px` }} className="absolute h-full bg-[#1a4530] left-0 top-0 z-20 rounded-sm"></div>
                    </div>
                </div>

                <div id="card-qr">
                    <h4 className="text-medium text-[#1A4530] font-bold">{getAuthenticateMessage()}</h4>
                    <div className="w-full grid items-center justify-center my-8">
                        {isAuthenticating ? 
                            <MoonLoader 
                                color="#1A4530"
                                loading={isAuthenticating}
                                size={100}
                                cssOverride={overrideLoading}
                            /> : 
                            <img src="/qr-code-example.png" alt="qr-code-to-login" className="w-48 h-48" />
                        }
                    </div>
                </div>

            </div>

        </div>
    )
};