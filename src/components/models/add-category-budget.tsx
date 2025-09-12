import { memo, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../../store/store";
import Button from "../reusable/button";
import ImageInput from "../reusable/input-image";
import { addBudget } from "../../api/budget-service";
import { addBudgetItem } from "../../slices/budgetSlice";

const AddCategoryBudgetModal = memo(({ close }: { close : () => void }) => {

    const dispatch = useDispatch<AppDispatch>();
    const categories = useSelector((store: RootState) => store.category.categoryies);
    const [categoryBudget, setCategoryBudget] = useState({
        category: '',
        amount:''
    });

    const updateCategoryBudget = useCallback((e: { target: { name: any; value: any; }; } ) => {
        setCategoryBudget((c) => ({ ...c, [e.target.name] : e.target.value}));
    }, [categoryBudget]);

    const handleSubmit = useCallback( async () => {
        try {
            const data= await addBudget({ category : categoryBudget.category , amount: Number(categoryBudget.amount)});
            dispatch(addBudgetItem(data));
        } catch (error) {
            console.log(error);
        }
    }, [categoryBudget]);

    return(
        <div 
            className="    
                bg-[#FFFFFF] rounded-[24px] 
                flex flex-col items-center
                p-[32px] gap-2
            "
        >
            <select name="category" id="category" className="w-[584px] h-[60px] border border-[#6B7280] rounded-[8px] pl-[40px]
                    text-[20px] font-inter font-[400] text-[#6B7280]"  onChange={updateCategoryBudget}>
                {
                    categories.length > 0 && categories.map((cate) => (
                        <option value={cate._id}>{cate.name}</option>
                    ))
                }
            </select>

            <ImageInput
                value={categoryBudget.amount}
                id="amount"
                handleChange={updateCategoryBudget}
                type="number"
            />
             
            <div className="flex justify-between items-center gap-2">
                <Button
                    label="Cancel"
                    color="white"
                    bgColor="#FF0000"
                    onClick={close}
                    width={150}
                />
                <Button
                    label="Submit"
                    color="white"
                    bgColor="#2563EB"
                    width={150}
                    onClick={handleSubmit}
                />
            </div>
        </div>
    )
});

export default AddCategoryBudgetModal;