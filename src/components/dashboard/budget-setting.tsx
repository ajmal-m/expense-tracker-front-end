import { memo } from "react";

const BudgetSettings = memo(() => {
    return(
        <div>
            <h1
                className="text-[24px] font-bold font-inter text-[#111827]"
            >
                Budget Settings
            </h1>
            <div className="flex justify-between mt-4">
                <div className="flex flex-col">
                    <h3
                        className="text-[16px] font-bold font-inter text-[#6B7280]"
                    >Category Budget</h3>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-[12px]">
                        <thead className="text-xs text-[#2563EB] uppercase bg-gray-50 dark:bg-[#E5E7EB] dark:text-[#2563EB]">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-[20px] font-bold font-inter">
                                    CATEGORY
                                </th>
                                <th scope="col" className="px-6 py-3 text-[20px] font-bold font-inter">
                                    LIMIT
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr className="bg-white dark:bg-[#FFFFFF] text-[20px] font-medium font-inter text-[#6B7280]">
                            <td className="px-6 py-4">Groceries</td>
                            <td className="px-6 py-4">₹2,500</td>
                        </tr>
                        <tr className="bg-white dark:bg-[#FFFFFF] text-[20px] font-medium font-inter text-[#6B7280]">
                            <td className="px-6 py-4">Dining</td>
                            <td className="px-6 py-4">$1999</td>
                        </tr>
                        <tr className="bg-white dark:bg-[#FFFFFF] text-[20px] font-medium font-inter text-[#6B7280]">
                            <td className="px-6 py-4">Transport</td>
                            <td className="px-6 py-4">$99</td>
                        </tr>
                         <tr className="bg-white dark:bg-[#FFFFFF] text-[20px] font-medium font-inter text-[#6B7280]">
                            <td className="px-6 py-4">Rent</td>
                            <td className="px-6 py-4">$99</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
});

export default BudgetSettings;