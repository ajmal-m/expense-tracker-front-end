import { memo, useCallback, useEffect } from "react";
import DefaultModal from "../reusable/model";
import AddCategoryBudgetModal from "../models/add-category-budget";
import Button from "../reusable/button";
import MainHeading from "../reusable/heading";
import { deleteBudget, getBudgets } from "../../api/budget-service";
import { deleteBudgetItem, setAllBudgets } from "../../slices/budgetSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import DeleteModal from "../models/delete-modal";
import MonthlyBudget from "./monthly-budget";

const BudgetSettings = memo(() => {

    const dispatch = useDispatch<AppDispatch>();
    const budgets = useSelector((state: RootState) => state.budget.budgets);

    useEffect(() => {

        const fetchAllBudgets = async () => {
            try {
                const data = await getBudgets();
                dispatch(setAllBudgets(data));
            } catch (error) {
                console.log(error);
            }
        }

        fetchAllBudgets();

    }, []);


    const handleDeleteBudget = useCallback(async (id : string)  => {
        try {
            await deleteBudget({ id : id  });
            dispatch(deleteBudgetItem({id}))
        } catch (error) {
            console.log(error);
        }
    }, []);
    return(
        <div>
            <MainHeading label="Budget Settings"/>
            <div className="flex justify-between mt-4">

                {/* category Budget */}
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
                                <th scope="col" className="px-6 py-3 text-[20px] font-bold font-inter">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                budgets.length > 0 && budgets.map((budget) => (
                                    <tr className="bg-white dark:bg-[#FFFFFF] text-[20px] font-medium font-inter text-[#6B7280]">
                                        <td className="px-6 py-4">{budget?.category?.name}</td>
                                        <td className="px-6 py-4">{budget.amount}</td>
                                        <td>
                                            <DefaultModal
                                                model={(close) => (
                                                    <DeleteModal close={close}  confirm={() =>handleDeleteBudget(budget._id)}/>
                                                )}
                                                trigger={(open) => (
                                                    <button
                                                        className="
                                                            px-2 py-1 bg-red-500 text-white rounded-2xl
                                                            cursor-pointer
                                                        "
                                                        onClick={open}
                                                    >Delete</button>
                                                )}
                                            />
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <DefaultModal 
                        model={(close) => (
                            <AddCategoryBudgetModal close={close} />
                        )}
                        trigger={(open) => (
                            <Button onClick={open} label="Add New Category Budget" bgColor="#2563EB" color="white"/>
                        )}                    
                    />
                </div>
                {/* category Budget */}

                {/* Monthly Budget */}
                <MonthlyBudget/>
                {/* Monthly Budget */}
            </div>
        </div>
    )
});

export default BudgetSettings;