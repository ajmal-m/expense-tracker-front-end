import { memo, useCallback, useState } from "react";
import AuthLayout from "../layouts/auth-layout";
import LogoImage from '../assets/LogoSmall.svg';
import GoogleIcon from '../assets/google_icon.svg';
import Input from "../components/reusable/input";
import Label from "../components/reusable/label";
import { Link } from "react-router-dom";
import axiosInstance from '../api/axios';
import { loginSuccess } from "../slices/authSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import Loader from "../components/reusable/loader";
import { useNavigate } from "react-router-dom";

const SignUpPage = memo(() => {

    const dispatch = useDispatch<AppDispatch>();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    const [signUpData, useSignUpData] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    });

    const updatevalue =  useCallback((name : string, value : string | number) => {
        useSignUpData((data) => ({ ...data, [name]: value}) )
    }, [signUpData]);


    const handleSubmit = useCallback( async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            const {data} = await axiosInstance.post('/auth/register', { name: signUpData.name, email : signUpData.email, password: signUpData.password});
            dispatch(loginSuccess(data));
            navigate('/dashboard');
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
        
    }, [signUpData, loading])
    return(
        <>
         <AuthLayout>
            <div className="flex flex-col items-center">
                <img src={LogoImage} alt="logo" className="w-[100px] h-[100px]"/>
                <h2 className="text-[24px] font-inter text-[#000000] font-[400] mt-[24px]">Join FinSight Today</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-[6px] mt-[24px]">
                        <Label
                            name="name"
                            label="Name"
                        />
                        <Input
                            type="text"
                            name="name"
                            value={signUpData.name}
                            updateValue={updatevalue}
                        />
                    </div>
                    <div className="flex flex-col gap-[6px] mt-[24px]">
                        <Label
                            name="email"
                            label="Email Address"
                        />
                        <Input
                            type="email"
                            name="email"
                            value={signUpData.email}
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
                            value={signUpData.password}
                            updateValue={updatevalue}
                        />
                    </div>
                    <div className="flex flex-col gap-[6px] mt-[24px]">
                        <Label
                            name="confirmPassword"
                            label="Confirm Password"
                        />
                         <Input
                            type="password"
                            name="confirmPassword"
                            value={signUpData.confirmPassword}
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
                            {
                                loading ? <Loader/> : "CREATE ACCOUNT"
                            }
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
                            Already have an account? <span className="text-[#2563EB] underline">
                                <Link to={'/login'} >
                                    Login
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

export default SignUpPage;