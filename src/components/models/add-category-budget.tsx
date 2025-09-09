import { memo } from "react";
import { useSelector } from "react-redux";
import { type RootState } from "../../store/store";
import Button from "../reusable/button";

const AddCategoryBudgetModal = memo(({ close }: { close : () => void }) => {
      const categories = useSelector((store: RootState) => store.category.categoryies);
    return(
        <div 
            className="    
                bg-[#FFFFFF] rounded-[24px] 
                flex flex-col items-center
                p-[32px]
            "
        >
            <select name="category" id="category" >
                {
                    categories.length > 0 && categories.map((cate) => (
                        <option value={cate._id}>{cate.name}</option>
                    ))
                }
            </select>
            <input type="text" name="amount" id="amount" />
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
                />
            </div>
        </div>
    )
});

export default AddCategoryBudgetModal;