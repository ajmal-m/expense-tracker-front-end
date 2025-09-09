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
            <h2 className="text-[24px] text-[#111827] font-bold font-inter">Personal Details</h2>
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
                            <div className="relative">
                                <img src={currencyIcon} alt="contact-icon" className="absolute top-[22px] left-[15px]" />
                                <select 
                                    name="currency" id="currency"
                                    className="w-[584px] h-[60px] border border-[#6B7280] rounded-[8px] pl-[40px]
                                        text-[20px] font-inter font-[400] text-[#6B7280]"
                                    onChange={updateUserData}
                                    value={userData.currency}
                                >
                                    <option value="">Select Currency</option>
                                    {
                                        currencies.map((curr, index) => (
                                            <option value={curr.name} key={index}>
                                                {curr.sign} - {curr.name}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[24px] flex justify-end">
                    <button className="w-[134px] h-[60px] bg-[#2563EB] rounded flex items-center justify-center
                        text-[24px] font-bold font-inter text-[#FFFFFF] cursor-pointer
                    "
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    )
});

export default PersonalDetailsUpdate;