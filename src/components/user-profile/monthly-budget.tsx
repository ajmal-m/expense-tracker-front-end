import { memo, useCallback, useEffect, useRef, useState } from "react";
import Button from "../reusable/button";
import RupeesIcon from '../../assets/rupees-icon.svg';
import { SubHeading } from "../reusable/heading";
import { getMonthlyBudget, createMonthlyBudget , updateMonthlyBudget} from "../../api/monthly-budget-service";
import toast from "react-hot-toast";

export const MonthlyBudget = memo(() => {

    const [monthlyBudget, setMonthlyBudget] = useState(0);
    const [budget, setBudget] = useState<any>(null);
    const [edit, setEdit] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(()=> {
        const fetchMonthlyBudget = async() => {
            try {
                const data = await getMonthlyBudget({
                    year : new Date().getFullYear(),
                    month: new Date().getMonth()+1
                });
                setBudget(data[0]);
                setMonthlyBudget(data[0].amount);
            } catch (error) {
                setMonthlyBudget(0);
                console.log(error);
            }
        }

        fetchMonthlyBudget();
    }, [])

    const handleMonthlyBudget = useCallback(async () => {

        const month = new Date().getMonth()+1;
        const year = new Date().getFullYear();
        

        if(budget){
            await updateMonthlyBudget({ year, month ,  amount: monthlyBudget, id : budget?._id});
            toast.success("Monthly budget updated successfully.");
        }else{
            await createMonthlyBudget({ year, month ,  amount: monthlyBudget});
            toast.success("Monthly budget created successfully.");

        }
    }, [monthlyBudget]);

    const editMonthlyBudget = useCallback(() => {
        setEdit(true);
        inputRef.current?.focus();
    }, [edit]);

    return(
        <div className="flex flex-col gap-1">
            <SubHeading label="Monthly Budget"/>
            <div className="relative">
                <img src={RupeesIcon} alt="rupees-icon" className="absolute top-[12px] left-[10px]"/>
                <input 
                    ref={inputRef}
                    value={monthlyBudget} type="number"
                    onChange={(e : any) => setMonthlyBudget( _ => {
                        if(e.target.value < 0) return 0;
                        return e.target.value;
                    })} 
                    className="
                        h-[48px] rounded-[8px] border border-[#6B7280]
                        text-[#6B7280] text-[20px] font-[400] font-inter pl-[40px]
                    " 
                    readOnly={!edit}
                />
            </div>
            <Button 
                label={ edit ? "Update" : "Edit"} 
                bgColor="#2563EB" color="white" 
                width={90} onClick={edit ? handleMonthlyBudget : editMonthlyBudget}
            />
        </div>
    )
});

export default MonthlyBudget;