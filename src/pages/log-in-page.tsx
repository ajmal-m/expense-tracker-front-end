import { memo, useCallback, useState } from "react";
import AuthLayout from "../layouts/auth-layout";
import Label from "../components/reusable/label";
import Input from "../components/reusable/input";
import LogoImage from '../assets/LogoSmall.svg';
import GoogleIcon from '../assets/google_icon.svg';
import { Link } from "react-router-dom";


const LoginPage = memo(() => {
    const [logInData, setLogInData] = useState({
        email:"",
        password:""
    });

    const updatevalue = useCallback((name: string, value: string | number) => {
        setLogInData((data) => ({ ...data, [name]: value}));
    }, [logInData]);

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(logInData)
    }, [logInData])

    return(
        <>
            <AuthLayout>
                <div className="flex flex-col items-center">
                <img src={LogoImage} alt="logo" className="w-[100px] h-[100px]"/>
                <h2 className="text-[24px] font-inter text-[#000000] font-[400] mt-[24px]">
                    Welcome back to FinSight
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-[6px] mt-[24px]">
                        <Label
                            name="email"
                            label="Email Address"
                        />
                        <Input
                            type="email"
                            name="email"
                            value={logInData.email}
                            updateValue={updatevalue}
                        />
                    </div>
                    <div className="flex flex-col gap-[6px] mt-[24px]">
                        <Label
                            name="password"
                            label="Password"
                        />
                         <Input
                            type="password"
                            name="password"
                            value={logInData.password}
                            updateValue={updatevalue}
                        />
                    </div>
                    <div className="mt-[24px]">
                        <button
                            className="
                            w-[350px] sm:w-[433px] h-[38px] bg-[#2563EB] rounded-[8px] 
                            flex items-center justify-center text-[#FFFFFF]
                            text-[16px] font-bold font-inter cursor-pointer
                            "
                            type="submit"
                        >
                            LOGIN
                        </button>
                    </div>
                    <div className="flex items-center justify-center mt-[12px]">
                        <span className="text-[12px] font-[400] font-inter text-[#111827]">
                            OR
                        </span>
                    </div>
                    <div className="mt-[12px]">
                        <button
                            className="
                                w-[350px] sm:w-[433px] h-[38px] flex justify-center
                                items-center gap-[6px]
                                border-[2px] border-[#2563EB] rounded-[8px]
                                cursor-pointer
                            "
                            type="button"
                        >
                            <img src={GoogleIcon} alt="google-icon" />
                            <p
                                className="
                                    text-[16px] font-bold font-inter
                                    text-[#2563EB] tracking-[0%]
                                "
                            >Continue with Google</p>
                        </button>
                    </div>
                    <div className="mt-[12px]">
                        <p
                            className="
                                text-[12px] text-[#111827] italic font-inter text-center

                            "
                        >
                            New to FinSight? <span className="text-[#2563EB] underline">
                                <Link to={'/sign-up'}>
                                    Signup
                                </Link>
                            </span>
                        </p>
                        <p className="mt-[12px] text-[#111827] text-[12px] italic font-inter text-center">
                            🔒 Your data is encrypted and never shared without your consent.
                        </p>
                    </div>
                </form>
            </div>
            </AuthLayout>
        </>
    )
});

export default LoginPage;