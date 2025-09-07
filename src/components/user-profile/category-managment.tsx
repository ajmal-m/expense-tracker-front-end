import { memo } from "react";
import cancelIcon from '../../assets/cancel-icon.svg';

const CategoryManagment = memo(() => {
    return(
        <div className="mt-[32px]">
            <h3 className="text-[#111827] text-[24px] font-bold font-inter">Category Management</h3>
            <div className="mt-[16px] flex gap-[12px] flex-wrap">
                {
                    ["Foods" , "Transport", "Groceries", "Bills", "Savings"].map((cat) => (
                        <div className="px-[16px] py-[8px] bg-[#E5E7EB] flex items-center gap-2">
                            <p className="text-[#6B7280] text-[24px] font-inter font-semibold">{cat}</p>
                            <button type="button" className="cursor-pointer">
                                <img src={cancelIcon} alt="cancel-icon"/>
                            </button>
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-center items-center">
                <div className="flex gap-[24px] items-center mt-[24px]">
                    <input type="text" name="category" id="add-category" 
                        className="
                            w-[379px] h-[45px] border border-[#6B7280]
                            rounded-2 placeholder:text-[20px]
                            placeholder:font-inter placeholder:font-[400]
                            pl-[20px] rounded-2xl
                        "
                        placeholder="Add New Category"
                    />
                    <button
                        className="
                            w-[96px] h-[45px] bg-[#2563EB]
                            text-[24px] font-bold font-inter
                            text-[#FFFFFF] rounded-2xl
                        "
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
});

export default CategoryManagment;