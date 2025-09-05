import { memo, useEffect, useState, type ReactNode } from "react";
import axiosInstance from "../api/axios";
import { logout, updateUser } from "../slices/authSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { useNavigate } from "react-router-dom";

const RootLayout = memo(({ children }: { children : ReactNode}) => {

    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    useEffect(() => {
        const checkAuth = async() => {
            try {
                const {data} = await axiosInstance.get('/auth/me');
                dispatch(updateUser(data));
            } catch (error : any) {
                if( error.response?.status === 401 ){
                    dispatch(logout());
                    navigate('/login');
                }
            }finally{
                setLoading(false);
            }
        }
        checkAuth();
    }, [dispatch, navigate]);

    if(loading) return "Dashboard Loading";

    return(
        <>
            {children}
        </>
    )
});

export default RootLayout;