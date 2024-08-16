interface Props{
    onSelectCategory:(categorie:string)=>void
}
function ExpensesFilter({onSelectCategory}:Props) {
    return (
        <select name="" id="" className="w-full h-14 rounded-md my-10 px-5 border-2 border-cyan-900 bg-cyan-50" onChange={(event)=>onSelectCategory(event.target.value)} >
            <option value="">All categories</option>
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
        </select>
    );
}

export default ExpensesFilter;