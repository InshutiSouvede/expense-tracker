interface Expense{
    id:string,
    description:string,
    amount: number,
    category:string
}
interface Props{
    expenses:Expense[]
    onDelete: (id:string)=>void
}
function ExpenseList({expenses,onDelete}:Props) {
    return (
        <>
        {expenses.length!==0&&<table className="table-auto my-10">
            
            <thead>
                <tr className="border-b  border-b-black">
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense=>{
                    return <tr key={expense.id} className="border-b border-b-black">
                        <td>{expense.description}</td>
                        <td>{expense.amount}</td>
                        <td>{expense.category}</td>
                        <td>
                        <button onClick={()=>onDelete(expense.id)} className="border-2 border-red-400 my-5 mx-5 h-14 rounded-md px-5">Delete</button>
                        </td>
                    </tr>
                }))}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total</td>
                    <td>${expenses.reduce((ac,cv)=>cv.amount+ac,0).toFixed(2)}</td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>
        </table>}
        </>
    );
}

export default ExpenseList;