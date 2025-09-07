import { memo, useCallback, useEffect, useState } from "react";
import cancelIcon from '../../assets/cancel-icon.svg';
import { getCategories , addCategory, deleteCategory } from "../../api/category-services";

const CategoryManagment = memo(() => {
    const [categories, setCategories] = useState<{ name: string; _id: string }[]>([]);
    const [category, setCategory] = useState("");

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getCategories();
                setCategories(data);
            } catch (error) {
                console.log(error);
                setCategories([]);
            }
        }
        fetchCategories();
    }, []);

    const addCategoryItem = useCallback(async (e : any) => {
        try {
            e.preventDefault();
            const data = await addCategory({ name : category});
            setCategory("")
            setCategories(cat => ([...cat, data]))
        } catch (error) {
            console.log(error);
        }
    }, [category , categories]);


    const removeCategory = useCallback(async (cat : { name: string; _id: string }) => {
        try {
            await  deleteCategory({ id : cat._id});
            setCategories(cate => cate.filter(item => item._id != cat._id));
        } catch (error) {
            console.log(error);
        }
    }, [categories])



    return(
        <div className="mt-[32px]">
            <h3 className="text-[#111827] text-[24px] font-bold font-inter">Category Management</h3>
            <div className="mt-[16px] flex gap-[12px] flex-wrap">
                {
                   categories.length > 0 && categories.map((cat) => (
                        <div className="px-[16px] py-[8px] bg-[#E5E7EB] flex items-center gap-2" key={cat._id}>
                            <p className="text-[#6B7280] text-[24px] font-inter font-semibold">{cat.name}</p>
                            <button type="button" className="cursor-pointer" onClick={() => removeCategory(cat)}>
                                <img src={cancelIcon} alt="cancel-icon"/>
                            </button>
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-center items-center">
                <div className="flex gap-[24px] items-center mt-[24px]">
                    <form onSubmit={addCategoryItem}>
                        <input type="text" name="category" id="add-category" 
                            className="
                                w-[379px] h-[45px] border border-[#6B7280]
                                rounded-2 placeholder:text-[20px]
                                placeholder:font-inter placeholder:font-[400]
                                pl-[20px] rounded-2xl
                            "
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            placeholder="Add New Category"
                        />
                        <button
                            className="
                                w-[96px] h-[45px] bg-[#2563EB]
                                text-[24px] font-bold font-inter
                                text-[#FFFFFF] rounded-2xl
                                cursor-pointer
                            "
                            type="submit"
                        >
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
});

export default CategoryManagment;