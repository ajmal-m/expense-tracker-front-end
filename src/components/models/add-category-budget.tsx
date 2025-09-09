import { memo } from "react";
import { useSelector } from "react-redux";
import { type RootState } from "../../store/store";

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
            <div className="flex justify-between items-center">
                <button onClick={close}>Cancel</button>
                <button>Submit</button>
            </div>
        </div>
    )
});

export default AddCategoryBudgetModal;