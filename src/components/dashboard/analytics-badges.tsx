import { memo, useEffect, useState } from "react";
import AnalyticsImage from '../../assets/analyticsImage.svg';
import BadgeLayout from "../../layouts/badge-layout";
import BudgetIcon from '../../assets/budgeticon.svg';
import BudgetSummaryIcon from '../../assets/budget_summary_icon.svg';
import ProgressBar from "../reusable/progress-bar";
import currencies from '../../data/currencies.json';
import { getCurrentMonthExpense } from "../../api/analytics-service";
import { formatNumber } from "../../utils/helpers";

const AnalyticsBadges = memo(() => {

    const currency = JSON.parse(localStorage.getItem("currency") || "");
    const currencyIcon = currencies.find((curr) => curr.name === currency)?.value || "₹";
    const [expenseData, setExpenseData] = useState<any>({});

    useEffect(() => {
        const fetchCurrentMonthExpense = async() => {
            const data = await getCurrentMonthExpense();
            setExpenseData(data);
        };

        fetchCurrentMonthExpense();
    }, [])
    return(
        <>
        <div className="mt-[24px]">
            <h2
                className="
                    text-[36px] font-bold font-inter
                    text-[#111827]
                "
            >
                DASHBOARD
            </h2>
            <div className="flex flex-wrap items-center gap-[32px] mt-[24px]">
                <BadgeLayout>
                    <div className="flex justify-between items-center w-[100%] px-[16px]">
                        <div className="flex flex-col gap-[6px]">
                            <p className="text-[#111827] text-[18px] font-[400] font-inter">Monthly Spending</p>
                            <p className="text-[#2563EB] text-[20px] font-semibold font-inter">{currencyIcon}{formatNumber(expenseData?.expense)}</p>
                            <p className="text-[14px] font-inter">📈 +12% vs last month</p>
                        </div>
                        <img src={AnalyticsImage} alt="analytics-image" />
                    </div>
                </BadgeLayout>
                <BadgeLayout>
                    <div className="flex justify-between items-center w-[100%] px-[16px]">
                        <div className="flex flex-col gap-[6px]">
                            <p className="text-[#111827] text-[18px] font-[400] font-inter">Budget Remaining</p>
                            <p className="text-[#2563EB] text-[20px] font-semibold font-inter">
                                {currencyIcon}{formatNumber(expenseData?.remains)} left of {currencyIcon}{formatNumber(expenseData?.budget)}</p>
                            <div className="flex items-center gap-[4px]">
                                <div className="w-[100px]">
                                    <ProgressBar width={expenseData.remainPercentage} color="yellow"/>
                                </div>
                                 <span className="text-[#6B7280]">{expenseData.remainPercentage}% remaining</span>
                            </div>
                        </div>
                        <img src={BudgetIcon} alt="budget-image" />
                    </div>
                </BadgeLayout>
                <BadgeLayout>
                    <div className="flex justify-between items-center w-[100%] px-[16px]">
                        <div className="flex flex-col gap-[6px]">
                            <p className="text-[#111827] text-[18px] font-[400] font-inter">Savings Rate</p>
                            <p className="text-[#2563EB] text-[20px] font-semibold font-inter">{currencyIcon}15,000 / {currencyIcon}20,000</p>
                            <p className="text-[14px] font-inter">On track – 75% reached</p>
                        </div>
                        <img src={BudgetIcon} alt="budget-image" />
                    </div>
                </BadgeLayout>
            </div>
            <div className="flex flex-wrap gap-[32px] mt-[24px]">
                <BadgeLayout>
                    <div className="flex justify-between items-center w-[100%] px-[16px]">
                        <div className="flex flex-col gap-[6px]">
                            <p className="text-[#111827] text-[18px] font-[400] font-inter">Budget Summary</p>
                            <p className="text-[#6B7280] font-[400] font-inter text-[14px]">3 of 5 categories under budget</p>
                            <p className="text-[#6B7280] text-[14px] font-inter font-[400]">⚠️ 2 categories near limit</p>
                        </div>
                        <img src={BudgetSummaryIcon} alt="budget-summary-icon" />
                    </div>
                </BadgeLayout>

                <div 
                    className="
                        w-[787px] h-[137px]  flex items-center
                        rounded-[12px] bg-[#E5E7EB] 
                        shadow-[1px_2px_6px_1px_rgba(0,0,0,1)]
                        justify-between px-[16px]
                    "
                >
                    <div className="flex flex-col gap-[6px]">
                        <p className="text-[18px] font-[400] font-inter text-[#111827]">Monthly Budget</p>
                        <h2 className="text-[20px] font-semibold font-inter text-[#2563EB]" >{currencyIcon}{formatNumber(expenseData?.expense)} of {currencyIcon}{formatNumber(expenseData?.budget)} used</h2>
                        <div className="flex items-center gap-[6px]">
                            <div className="w-[70px]">
                                <ProgressBar width={85} color="#F8BD00"/>
                            </div>
                            <p className="text-[#6B7280] text-[14px] font-medium font-inter">{expenseData?.spended}% spent</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-[20px]">
                        <div className="flex flex-col gap-[8px]">
                            <div className="flex flex-col items-center justify-between gap-[4px]">
                                <div className="flex items-center justify-between gap-1">
                                    <p className="text-[14px] text-[#6B7280] font-medium font-inter">Groceries</p>
                                    <p className="text-[14px] text-[#6B7280] font-medium font-inter" >83%</p>
                                </div>
                                <ProgressBar width={83} color="#F8BD00" />
                                <p 
                                    className="text-[12px] font-medium font-inter text-[#F59E0B]"
                                >
                                    ⚠️ 80% reaches
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-between gap-[4px]">
                                <div className="flex items-center justify-between gap-1">
                                    <p className="text-[14px] text-[#6B7280] font-medium font-inter">Transport</p>
                                    <p className="text-[14px] text-[#6B7280] font-medium font-inter" >70%</p>
                                </div>
                                <ProgressBar width={70} color="#F8BD00"/>
                            </div>
                        </div>

                        <div className="flex flex-col gap-[8px]">
                            <div className="flex flex-col items-center justify-between gap-[4px]">
                                <div className="flex items-center justify-between gap-1">
                                    <p className="text-[14px] text-[#6B7280] font-medium font-inter">Groceries</p>
                                    <p className="text-[14px] text-[#6B7280] font-medium font-inter" >83%</p>
                                </div>
                                <ProgressBar width={83}  color="#F8BD00" />
                                <p 
                                    className="text-[12px] font-medium font-inter text-[#F59E0B]"
                                >
                                    ⚠️ 80% reaches
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-between gap-[4px]">
                                <div className="flex items-center justify-between gap-1">
                                    <p className="text-[14px] text-[#6B7280] font-medium font-inter">Transport</p>
                                    <p className="text-[14px] text-[#6B7280] font-medium font-inter" >70%</p>
                                </div>
                                <ProgressBar width={70}  color="red"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
});

export default AnalyticsBadges;