import { memo, useEffect } from "react";
import TransactionTable from "../reusable/transaction-table";
import { getExpenses } from "../../api/expense-service";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../../store/store";
import { setAllExpenses } from "../../slices/expenseSlice";


const RecentTransactions = memo(() => {

    const dispatch = useDispatch<AppDispatch>();
    const expenses = useSelector((store : RootState ) => store.expense.expenses);

    useEffect(() => {
        const fetchExpense = async () => {
            const data = await getExpenses();
            dispatch(setAllExpenses(data));
        }
        fetchExpense();
    },[])
    return(
        <div className="mt-[24px] pt-[8px] border-t border-[#6B7280]">
            <h2 className="text-[24px] text-[#111827] font-inter font-semibold" >Recent Transactions</h2>
            <div className="mt-[24px]">
                <TransactionTable
                    expenses={expenses}
                />
            </div>
        </div>
    )
});

export default RecentTransactions;