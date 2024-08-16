import {useForm } from "react-hook-form";
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { categories } from "../categories";
const schema =  z.object({
    description: z.string().min(3,{message:"Description must be atleast 3 characters"}).max(50),
    category: z.enum(categories,{
        errorMap: ()=>({message:"Category is required"})
    }) ,
    amount: z.number({invalid_type_error:"Amount is required"}).min(0.01).max(100_000)
});
type ExpenseFormData = z.infer<typeof schema>

interface Props {
    onSubmit:(data:ExpenseFormData)=>void; 
}
export default function Form({onSubmit}:Props) {
    const {register,handleSubmit, formState:{errors,isValid}} = useForm<ExpenseFormData>({resolver:zodResolver(schema)})
    
    return (
        <form className="flex flex-col gap-10" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-3">
                <label htmlFor="name">Name</label>
                <input  type="text" id="name" {...register('description')}  className="border rounded-md h-14 px-5" />
                {errors.description&&<p className="text-red-600">{errors.description.message}</p>}                
            </div>
            <div className="flex flex-col gap-3">                
                <label htmlFor="amount">Amount</label>
                <input  type="number" id="amount" {...register('amount',{valueAsNumber:true})} className="border rounded-md h-14 px-5" />
                {errors.amount&&<p className="text-red-600">{errors.amount.message}</p>}
            </div>
            <div>
            <label htmlFor="category">Category</label>
            <select  {...register('category')} className="w-full h-14 rounded-md px-5 border-2 bg-transparent" id="category">
            <option value=""></option>
            {categories.map((category,index)=><option key={index} value={category}>{category}</option>)}
            </select>
            {errors.category&&<p className="text-red-600">{errors.category.message}</p>}
            </div>
            
            <button  type="submit" className={`w-max px-5 h-14 rounded-md ${isValid?"bg-cyan-900":"bg-gray-400"}  text-white`}>Submit</button>
        </form>
    )
}
