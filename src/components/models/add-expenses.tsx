import { memo, useCallback, useState } from "react";
import AddExpenseIcon from '../../assets/add_expense.svg';
import addAmountIcon from '../../assets/amount-add-expense.svg';
import addDateIcon from '../../assets/date-add-expense.svg';
import MainHeading from "../reusable/heading";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../../store/store";
import { addExpense } from "../../api/expense-service";
import toast from "react-hot-toast";
import { setSingleExpense } from "../../slices/expenseSlice";


const Label = memo(({ name , label} : { name:string; label:string;}) => {
    return(
        <label 
            htmlFor={name} 
            className="
                text-[16px] font-bold 
                font-inter text-[#6B7280]
            "
        >
            {label}
        </label>
    )
});

const Button = memo((
    { label , onClick , color }: { label: string , color : string; onClick?:() => void}) => {
    return(
        <button
            type="button"
            className="
                w-[320px] h-[55px] rounded-[8px]
                text-[#FFFFFF] font-bold
                font-inter cursor-pointer
            "
            style={{ background: `${color}`}}
            onClick={onClick}
        >
            {label}
        </button>
    )
});


const AddExpenseModel = memo(({ close }: { close : () => void }) => {

    const dispatch = useDispatch<AppDispatch>();
    const categories = useSelector(( store : RootState) => store.category.categoryies);

    const [expenseData, setExpenseData] = useState({
        amount:0,
        category:"",
        date:"",
        notes:''
    }); 


    const handleChangeExpense = useCallback((e: { target: { name: any; value: any; }; }) => {
        let {name, value} = e.target;
        if(name === 'amount' && Number(value) < 1){
            value = 0;
        }
        setExpenseData(expense => ({ ...expense, [name]: value}));
    }, [expenseData]);


    const handleSubmit = useCallback( async () => {
        try {
            let [year, month, day] = expenseData.date.split('-');
            const data  = await addExpense({
                amount: Number(expenseData.amount),
                category: expenseData.category,
                day: Number(day),
                month:Number(month),
                year: Number(year),
                notes: expenseData.notes
            });
            dispatch(setSingleExpense(data));
            toast.success("Expense added");
            close();
        } catch (error : any) {
            console.log(error);
            toast.error(`Error - ${error.data.response.message}`);
        }
    }, [expenseData])


    return(
        <div
            className="
                bg-[#FFFFFF] rounded-[24px] 
                flex flex-col items-center
                p-[32px]
            "
        >
            <img src={AddExpenseIcon} alt="add-expense-icon"/>
            <MainHeading label="Add Expense"/>

            <form>
                {/* Amount Input field */}
                <div className="flex flex-col gap-1">
                    <Label name="amount" label="Amount"  />
                    <div className="relative">
                        <input 
                            type="number" name="amount" id="amount" 
                            className="w-[654px] h-[48px] rounded-[8px] border border-[#6B7280]
                                placeholder:text-[20px] placeholder:font-inter placeholder:text-[#6B7280]
                                pl-[45px]
                            " 
                            placeholder="Enter Amount"
                            value={expenseData.amount}
                            onChange={handleChangeExpense}
                        />
                        <img src={addAmountIcon} alt="amount-icon"  className="absolute top-[14px] left-[9px]"/>
                    </div>
                </div>

                {/* category Input field */}
                <div className="flex flex-col gap-1 mt-[36px]">
                    <Label name="category" label="Category"  />
                    <select name="category" id="category" className="w-[654px] h-[48px] rounded-[8px] border border-[#6B7280]
                                placeholder:text-[20px] placeholder:font-inter placeholder:text-[#6B7280]
                                pl-[45px]"  onChange={handleChangeExpense} >
                        <option value="">Select an catgory</option>
                        {
                            categories.length > 0 && categories.map((cate) => (
                                <option value={cate._id}>{cate.name}</option>
                            ))
                        }
                    </select>
                </div>


                {/* Date Input filed */}
                <div className="flex flex-col gap-1 mt-[36px]">
                    <Label name="date" label="Date"  />
                    <div className="relative">
                        <input 
                            type="date" name="date" id="date" 
                            className="w-[654px] h-[48px] rounded-[8px] border border-[#6B7280]
                                placeholder:text-[20px] placeholder:font-inter placeholder:text-[#6B7280]
                                pl-[45px]
                            " 
                            placeholder="Select Date"
                            onChange={handleChangeExpense}
                        />
                        <img src={addDateIcon} alt="date-icon"  className="absolute top-[14px] left-[9px]"/>
                    </div>
                </div>

                {/* Notes optional field */}
                <div className="flex flex-col gap-1 mt-[36px]">
                    <Label name="notes" label="Notes (optional)"  />
                    <textarea 
                        name="notes" id="notes"
                        className="w-[654px] h-[48px] rounded-[8px] border border-[#6B7280]
                            placeholder:text-[20px] placeholder:font-inter placeholder:text-[#6B7280]
                            p-[12px]
                        "
                        placeholder="Write something..."
                        onChange={handleChangeExpense}
                        value={expenseData.notes}
                    ></textarea>
                </div>

                {/* Button group */}
                <div className="flex items-center gap-[14px] mt-[12px]">
                    <Button label="ADD" color="#2563EB" onClick={handleSubmit} />
                    <Button label="CANCEL" color="#FF0000" onClick={close}/>
                </div>
            </form>
        </div>
    )
});

export default AddExpenseModel;