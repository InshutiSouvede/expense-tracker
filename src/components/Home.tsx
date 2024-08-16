import { useState } from 'react';
import ExpenseList from './ExpenseList';
import Form from './Form'
import ExpensesFilter from './ExpensesFilter';
import { nanoid } from 'nanoid';

export default function Home() {
    const [expenses,setExpenses] = useState([
        {id:nanoid(),description:"aaa",amount:10,category:"Utilities"},
        {id:nanoid(),description:"aaa",amount:10,category:"Groceries"},
        {id:nanoid(),description:"aaa",amount:10,category:"Entertainment"},
        {id:nanoid(),description:"aaa",amount:10,category:"Utilities"}
    ])
    const [selectedCategory,setSelectedCategory] = useState("")
    const visibleExpenses = !selectedCategory?expenses:expenses.filter((el)=>el.category==selectedCategory)
    return (
        <div className='px-20 text-2xl text-cyan-900'>
            <Form onSubmit={expense=>setExpenses([...expenses,{id:nanoid(),...expense}])} />
            <ExpensesFilter onSelectCategory={(category)=>setSelectedCategory(category)} />
            <ExpenseList 
            expenses={visibleExpenses}
            onDelete={(id)=>setExpenses(expenses.filter((expense)=>expense.id!=id))}
            />
        </div>
    );
}

