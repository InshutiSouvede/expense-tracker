import { useState } from 'react';
import ExpenseList from './ExpenseList';
import Form from './Form'
export default function Home() {
    const [expenses,setExpenses] = useState([
        {id:1,description:"aaa",amount:10,category:"Utilities"},
        {id:2,description:"aaa",amount:10,category:"Utilities"},
        {id:3,description:"aaa",amount:10,category:"Utilities"},
        {id:4,description:"aaa",amount:10,category:"Utilities"}
    ])
    return (
        <div className='px-20 text-2xl'>
            <Form />
            <ExpenseList 
            expenses={expenses}
            onDelete={(id)=>setExpenses(expenses.filter((expense)=>expense.id!=id))}
            />
        </div>
    );
}

