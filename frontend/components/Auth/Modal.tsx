import axios, { AxiosResponse } from "axios";
import { useState, useRef, useEffect, CSSProperties } from "react"
import { MoonLoader } from "react-spinners";
import {QRCodeSVG} from 'qrcode.react';
import config from "../../config"
import { setJwtUserToLocalstorage, userLogged } from "@/utils/jwt";
import { useRouter } from "next/router";

interface RequestSigninData {
    signInToken: SignInStatus
}

interface RequestSigninBody {
    success: boolean,
    data: RequestSigninData
}

interface RequestSiginiStatusBody {
    success: boolean,
    data: { signInToken: string, status: SignInStatus }
}

enum SignInStatus  {
    PENDING = "pending",
    EXPIRED= "expired",
    SIGNED="signed",
    DECLINED="declined",
    SESSION_EXPIRED= "session expired",
}

export function Modal() {
    const [menuTextSize, setMenuTextSize] = useState(0)
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [qrToken, setQrToken] = useState("");
    const [status, setStatus] = useState(SignInStatus.PENDING);

    const router = useRouter()

    const ref = useRef<HTMLSpanElement>(null);

    const overrideLoading: CSSProperties = {
        display: "block",
        margin: "30px auto",
    };

    useEffect(() => {
        if (ref.current) setMenuTextSize(ref.current.offsetWidth)
    }, [])

    useEffect(() => {
        onInit()
    }, []);

    useEffect(() => {
        const interval = setInterval(async () => {
            if (!!qrToken) {
                await setAuthStatus(qrToken)
            }
        }, 3000)

        return () => clearInterval(interval)
    }, [qrToken])

    const onInit = async () => {
        setIsAuthenticating(true);
        const token = await getAuthToken();
        if (!!token) {
            setQrToken(token);
            setIsAuthenticating(false);
        }
    }

    const getAuthenticateMessage = () => {
        if (isAuthenticating) return "Autentication in progres..."
        return "Scan this QR code in your CKB Bull mobile app"
    }

    const setAuthStatus = async (qrToken: string) => {
        try {
            const data:any = await getAuthStatus(qrToken)
            setStatus(data.status)

            if (data.status === "signed") {
                const token = data.jwt as string;
                setJwtUserToLocalstorage(token);
                if (userLogged()) router.push("/profile");
            }

        } catch(e) {
            setStatus(SignInStatus.PENDING)
        }
    }

    const getAuthToken = async () => {
        try {
            const response: AxiosResponse<RequestSigninBody> = await axios({
                method: 'GET',
                url: '/auth/request/signin',
                baseURL: config.api_url_backend
            });
            if (response.data.success) return response.data.data.signInToken
            return ""
        } catch(e) {
            console.error(e)
            return ""
        }
    }

    const getAuthStatus = async (code:string) => {
        try {
            const response: AxiosResponse<RequestSiginiStatusBody> = await axios({
                method: 'GET',
                url: `/auth/request/status?code=${encodeURIComponent(code)}`,
                baseURL: config.api_url_backend
            });
            if (response.data.success) return response.data.data
            return SignInStatus.PENDING
        } catch(e) {
            return SignInStatus.PENDING
        }
    }


    return (
        <div className="w-screen h-screen fixed bg-[#4e574ee9] z-10 grid place-items-center -mt-[100px]">

            <div id="card" className="bg-[#E6FEF2] rounded-lg border p-12">

                <div id="card-header" className="w-full flex justify-between">
                    <h3 className="text-2xl text-[#1A4530] mr-48 font-bold">Authenticate</h3>
                    <div className="flex justify-center items-center">
                        <div id="item-dot" className="w-2 h-2 rounded-full bg-[#1A4530] self-center mr-2"></div>
                        <span className="text-[#1A4530] self-center font-light">Nervos Testnet</span>
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
                            <div className="w-48 h-48 grid justify-center items-center">
                                <QRCodeSVG
                                    size={170}
                                    value={qrToken} 
                                    bgColor="#E6FEF2"
                                    fgColor="#1A4530"
                                    level="L"
                                />
                            </div>
                        }
                    </div>
                </div>

                <div id="card-status" className="w-full flex justify-center items-center">
                    <button className={`py-1 px-6 text-center rounded-lg border-2 border-[#1A4530] text-[#1A4530] font-bold ${status === SignInStatus.PENDING ? 'animate-pulse' : ''}`}>
                        {status.toString().charAt(0).toUpperCase() + status.toString().slice(1)}
                    </button>
                </div>

            </div>

        </div>
    )
};