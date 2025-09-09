import { memo, useCallback, useState } from "react";
import contact from '../../assets/contact.svg';
import emailIcon from '../../assets/email-icon.svg';
import currencyIcon from '../../assets/currency-icon.svg';
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../../store/store";
import currencies from '../../data/currencies.json';
import { updateUserDetails } from "../../api/user-services";
import { updateUser } from "../../slices/authSlice";
import toast from "react-hot-toast";
import ImageInput from "../reusable/input-image";
import Label from "../reusable/label";
import Select from "../reusable/select";
import Button from "../reusable/button";
import MainHeading from "../reusable/heading";

const PersonalDetailsUpdate = memo ( () => {

    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((store: RootState) =>  store.auth.user);
    const [userData, setUserData] = useState({
        name:user?.name || "",
        currency: user?.currency,
        password:""
    });

    const updateUserData = useCallback( (e: { target: { name: any; value: any; }; }) => {
        setUserData(data => ({ ...data, [e.target.name] : e.target.value}));
    }, [userData, user]);


    const handleSubmitUserData = useCallback(async (e: { preventDefault: () => void; } ) => {
        e.preventDefault();
        try {
            const data = await updateUserDetails(userData);
            toast.success("User updated successfully.");
            dispatch(updateUser(data));
        } catch (error) {
            console.log(error);
        }
    }, [userData])
    return(
        <div className="border-t border-[#111827] pt-[24px] mt-[24px]">
            <MainHeading label="Personal Details"/>
            <form className="mt-[16px]" onSubmit={handleSubmitUserData} >
                <div className="flex items-center gap-[32px]">
                    <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col gap-[12px]">
                            <Label
                                name="name"
                                size={16}
                                weight={600}
                                color="#6B7280"
                                label="Name"
                            />
                            <ImageInput 
                                image={contact}
                                value={userData.name}
                                handleChange={updateUserData}
                                id="user-name"
                                imageTop={19}
                                imageLeft={15}
                            />
                        </div>

                         <div className="flex flex-col gap-[12px]">
                             <Label
                                name="password"
                                size={16}
                                weight={600}
                                color="#6B7280"
                                label="Password"
                            />
                            <ImageInput 
                                image={contact}
                                value={userData.password}
                                handleChange={updateUserData}
                                id="user-password"
                                imageTop={19}
                                imageLeft={15}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col gap-[12px]">
                             <Label
                                name="email"
                                size={16}
                                weight={600}
                                color="#6B7280"
                                label="Email"
                            />
                             <ImageInput 
                                image={emailIcon}
                                value={user?.email || ""}
                                id="user-email"
                                disabled={true}
                                imageTop={22}
                                imageLeft={15}
                            />
                        </div>

                         <div className="flex flex-col gap-[12px]">
                            <Label
                                name="currency"
                                size={16}
                                weight={600}
                                color="#6B7280"
                                label="Currency"
                            />
                            <Select
                                name="currency"
                                image={currencyIcon}
                                updateChange={updateUserData}
                                value={userData.currency || "Select Currency"}
                                list={currencies}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-[24px] flex justify-end">
                    <Button 
                        label="Update" 
                        color="white" 
                        bgColor="#2563EB"
                        width={200}
                    />
                </div>
            </form>
        </div>
    )
});

export default PersonalDetailsUpdate;