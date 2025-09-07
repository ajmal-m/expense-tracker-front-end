import { memo } from "react";
import AddExpenseIcon from '../../assets/add_expense.svg';
import addAmountIcon from '../../assets/amount-add-expense.svg';
import categoryIcon from '../../assets/category-add-expense.svg';
import addDateIcon from '../../assets/date-add-expense.svg';


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
    return(
        <div
            className="
                bg-[#FFFFFF] rounded-[24px] 
                flex flex-col items-center
                p-[32px]
            "
        >
            <img src={AddExpenseIcon} alt="add-expense-icon"/>
            <h2
                className="
                    text-[24px] font-bold font-inter
                    text-[#111827]
                "
            >Add Expense</h2>

            <form>
                {/* Amount Input field */}
                <div className="flex flex-col gap-1">
                    <Label name="amount" label="Amount"  />
                    <div className="relative">
                        <input 
                            type="text" name="amount" id="amount" 
                            className="w-[654px] h-[48px] rounded-[8px] border border-[#6B7280]
                                placeholder:text-[20px] placeholder:font-inter placeholder:text-[#6B7280]
                                pl-[45px]
                            " 
                            placeholder="Enter Amount"
                        />
                        <img src={addAmountIcon} alt="amount-icon"  className="absolute top-[14px] left-[9px]"/>
                    </div>
                </div>

                {/* category Input field */}
                <div className="flex flex-col gap-1 mt-[36px]">
                    <Label name="category" label="Category"  />
                    <div className="relative">
                        <input 
                            type="text" name="amount" id="amount" 
                            className="w-[654px] h-[48px] rounded-[8px] border border-[#6B7280]
                                placeholder:text-[20px] placeholder:font-inter placeholder:text-[#6B7280]
                                pl-[45px]
                            " 
                            placeholder="Select Category"
                        />
                        <img src={categoryIcon} alt="amount-icon"  className="absolute top-[14px] left-[9px]"/>
                    </div>
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
                    ></textarea>
                </div>

                {/* Button group */}
                <div className="flex items-center gap-[14px] mt-[12px]">
                    <Button label="ADD" color="#2563EB"/>
                    <Button label="CANCEL" color="#FF0000" onClick={close}/>
                </div>
            </form>
        </div>
    )
});

export default AddExpenseModel;