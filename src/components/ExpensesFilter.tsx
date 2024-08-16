import { categories } from "../categories";

interface Props{
    onSelectCategory:(categorie:string)=>void
}
function ExpensesFilter({onSelectCategory}:Props) {
    return (
        <select name="" id="" className="w-full h-14 rounded-md my-10 px-5 border-2 border-cyan-900 bg-cyan-50" onChange={(event)=>onSelectCategory(event.target.value)} >
            <option value="">All categories</option>
            {categories.map((category)=><option value={category}>{category}</option>)}
        </select>
    );
}

export default ExpensesFilter;