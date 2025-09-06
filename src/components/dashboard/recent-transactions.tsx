import { memo } from "react";
import TransactionTable from "../reusable/transaction-table";



const RecentTransactions = memo(() => {
    return(
        <div className="mt-[24px] pt-[8px] border-t border-[#6B7280]">
            <h2 className="text-[24px] text-[#111827] font-inter font-semibold" >Recent Transactions</h2>
            <div className="mt-[24px]">
                <TransactionTable/>
            </div>
        </div>
    )
});

export default RecentTransactions;