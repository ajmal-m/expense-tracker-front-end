import { memo } from "react";
import contact from '../../assets/contact.svg';
import emailIcon from '../../assets/email-icon.svg';
import currencyIcon from '../../assets/currency-icon.svg';

const PersonalDetailsUpdate = memo ( () => {
    return(
        <div className="border-t border-[#111827] pt-[24px] mt-[24px]">
            <h2 className="text-[24px] text-[#111827] font-bold font-inter">Personal Details</h2>
            <form className="mt-[16px]" >
                <div className="flex items-center gap-[32px]">
                    <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col gap-[12px]">
                            <label htmlFor="name" className="text-[16px] font-bold font-inter text-[#6B7280]">Name</label>
                            <div className="relative">
                                <img src={contact} alt="contact-icon" className="absolute top-[19px] left-[15px]" />
                                <input type="text" name="name" id="name"
                                    className="w-[584px] h-[60px] border border-[#6B7280] rounded-[8px] pl-[40px]
                                        text-[20px] font-inter font-[400] text-[#6B7280]
                                    "
                                    value={'John Dow'}
                                />
                            </div>
                        </div>

                         <div className="flex flex-col gap-[12px]">
                            <label htmlFor="name" className="text-[16px] font-bold font-inter text-[#6B7280]">Password</label>
                            <div className="relative">
                                <img src={contact} alt="contact-icon" className="absolute top-[19px] left-[15px]" />
                                <input type="password" name="password" id="password"
                                    className="w-[584px] h-[60px] border border-[#6B7280] rounded-[8px] pl-[40px]
                                        text-[20px] font-inter font-[400] text-[#6B7280]
                                    "
                                    value={'John Dow'}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col gap-[12px]">
                            <label htmlFor="name" className="text-[16px] font-bold font-inter text-[#6B7280]">Email</label>
                            <div className="relative">
                                <img src={emailIcon} alt="contact-icon" className="absolute top-[19px] left-[15px]" />
                                <input type="text" name="name" id="name"
                                    className="w-[584px] h-[60px] border border-[#6B7280] rounded-[8px] pl-[40px]
                                        text-[20px] font-inter font-[400] text-[#6B7280]
                                    "
                                    value={'John Dow'}
                                />
                            </div>
                        </div>

                         <div className="flex flex-col gap-[12px]">
                            <label htmlFor="name" className="text-[16px] font-bold font-inter text-[#6B7280]">Currency</label>
                            <div className="relative">
                                <img src={currencyIcon} alt="contact-icon" className="absolute top-[19px] left-[15px]" />
                                <input type="password" name="password" id="password"
                                    className="w-[584px] h-[60px] border border-[#6B7280] rounded-[8px] pl-[40px]
                                        text-[20px] font-inter font-[400] text-[#6B7280]
                                    "
                                    value={'John Dow'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[24px] flex justify-end">
                    <button className="w-[134px] h-[60px] bg-[#2563EB] rounded flex items-center justify-center
                        text-[24px] font-bold font-inter text-[#FFFFFF]
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