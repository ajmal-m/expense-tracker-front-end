import { memo, useCallback } from "react";
import DateIcon from '../../assets/date.svg';
import amountIcon from '../../assets/amount.svg';
import categoryIcon from '../../assets/category.svg';
import notesIcon from '../../assets/notes.svg';
import paymentIcon from '../../assets/payment.svg';
import acuionIcon from '../../assets/action.svg';
import EditIcon from '../../assets/edit.svg';
import deleteIcon from '../../assets/delete.svg';
import { deleteExpense } from "../../api/expense-service";
import DefaultModal from "./model";
import DeleteModal from "../models/delete-modal";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { type AppDispatch } from "../../store/store";
import { removeExpenseItem } from "../../slices/expenseSlice";
import { formatNumber } from "../../utils/helpers";

const TransactionTable = memo( ({ expenses } : {
  expenses : { amount: number; notes: string; category: string; day: string, _id: string; month:string;year:string; }[]
}) => {

  const dispatch = useDispatch<AppDispatch>();
  const handleDeleteExpense = useCallback(async (id : string) => {
    try {
      await deleteExpense({ id });
      dispatch(removeExpenseItem(id));
      toast.success("Expense delete successfully.")
    } catch (error) {
      console.log(error);
    }
  }, []);


  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead 
            className="
                text-[20px] font-bold font-inter text-[#2563EB] 
                uppercase bg-gray-50 dark:bg-[#E5E7EB] dark:text-[#2563EB]
            "
        >
          <tr>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center gap-2">
                <img src={DateIcon} alt="date-icon" /> 
                <span>DATE</span>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center gap-2">
                <img src={amountIcon} alt="amount-icon"/> 
                <span>AMOUNT</span>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center gap-2">
                <img src={categoryIcon} alt="category-icon"/> 
                <span>CATEGORY</span>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center gap-2">
                <img src={notesIcon} alt="notes-icon"/>
                <span>NOTES</span>
              </div>
            </th>
             <th scope="col" className="px-6 py-3">
              <div className="flex items-center gap-2">
                <img src={paymentIcon} alt="payment-icon"/>
                <span>PAYMENT</span>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center gap-2">
                <img src={acuionIcon} alt="action-icon"/>
                <span>ACTIONS</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.map((expense, index) => (
              <tr key={index} className="bg-white border-b dark:bg-[#FFFFFF] dark:border-gray-700 border-gray-200">
                <td className="px-6 py-4 text-[20px] text-[#6B7280] font-inter font-medium">{expense.day}/{expense.month}/{expense.year}</td>
                <td className="px-6 py-4 text-[20px] text-[#6B7280] font-inter font-medium">₹{formatNumber(expense.amount)}</td>
                <td className="px-6 py-4 text-[20px] text-[#6B7280] font-inter font-medium">{expense.category?.name}</td>
                <td className="px-6 py-4 text-[20px] text-[#6B7280] font-inter font-medium">{expense.notes}</td>
                <td className="px-6 py-4 text-[20px] text-[#6B7280] font-inter font-medium">debit card</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button>
                      <img src={EditIcon} alt="edit-icon"/>
                    </button>
                    <DefaultModal
                      trigger={(open) => (
                        <button onClick={open} className="cursor-pointer">
                          <img src={deleteIcon} alt="delete-icon"/>
                        </button>
                      )}

                      model={
                        (close) => (
                          <DeleteModal close={close} confirm={() => { handleDeleteExpense(expense._id) ; close();} }/>
                        )
                      }
                    />
                  </div>
                </td>
              </tr>
            ) )
          }
        </tbody>
      </table>
    </div>
  );
});

export default TransactionTable;
