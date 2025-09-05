import { memo, type ReactNode } from "react";
import loginImage from '../assets/loginImage.svg';

const AuthLayout = memo( ({ children }: { children : ReactNode}) => {
    return(
        <>
        <div className="w-full flex items-center justify-center gap-[143px]">
            <img src={loginImage} alt="login-image" className="w-[606px] h-[606px] hidden xl:block"/>
            {children}
        </div>
        </>
    )
});

export default AuthLayout;