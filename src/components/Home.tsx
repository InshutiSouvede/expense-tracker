import { useState } from 'react';
import ExpenseList from './ExpenseList';
import Form from './Form'
import ExpensesFilter from './ExpensesFilter';

export const categories = ["Groceries","Utilites","Entertainment"]

export default function Home() {
    const [expenses,setExpenses] = useState([
        {id:1,description:"aaa",amount:10,category:"Utilities"},
        {id:2,description:"aaa",amount:10,category:"Groceries"},
        {id:3,description:"aaa",amount:10,category:"Entertainment"},
        {id:4,description:"aaa",amount:10,category:"Utilities"}
    ])
    const [selectedCategory,setSelectedCategory] = useState<string>("")
    const visibleExpenses = !selectedCategory?expenses:expenses.filter((el)=>el.category==selectedCategory)
    return (
        <div className='px-20 text-2xl text-cyan-900'>
            <Form />
            <ExpensesFilter onSelectCategory={(category)=>setSelectedCategory(category)} />
            <ExpenseList 
            expenses={visibleExpenses}
            onDelete={(id)=>setExpenses(expenses.filter((expense)=>expense.id!=id))}
            />
        </div>
    );
}

