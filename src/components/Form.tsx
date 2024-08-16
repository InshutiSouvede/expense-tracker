import {FieldValues, useForm } from "react-hook-form";
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { categories } from "./Home";
const schema =  z.object({
    name: z.string().min(3,{message:"Name must be atleast 3 characters"}),
    category: z.string(),
    amount: z.number({message:"Age field is required"}).min(18,{message:"Age must be atleast 18"})
});
type FormData = z.infer<typeof schema>
export default function Form() {
    const {register,handleSubmit, formState:{errors,isValid}} = useForm<FormData>({resolver:zodResolver(schema)})
    console.log(errors.name?.message,isValid)
    const onSubmit = (data:FieldValues)=>{
        console.log("Form data", data)
    }
    return (
        <form className="flex flex-col gap-10" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-3">
                <label htmlFor="name">Name</label>
                <input  type="text" id="name" {...register('name')}  className="border rounded-md h-14 px-5" />
                {errors.name&&<p className="text-red-600">{errors.name.message}</p>}                
            </div>
            <div className="flex flex-col gap-3">                
                <label htmlFor="amount">Amount</label>
                <input  type="number" id="amount" {...register('amount',{valueAsNumber:true})} className="border rounded-md h-14 px-5" />
                {errors.amount&&<p className="text-red-600">{errors.amount.message}</p>}
            </div>
            <label htmlFor="category">Category</label>
            <select className="w-full h-14 rounded-md px-5 border-2 bg-transparent" id="category" {...register('category',{valueAsNumber:true})}>
            <option value=""></option>
            {categories.map((category)=><option value={category}>{category}</option>)}
           
            </select>
            <button disabled={!isValid} type="submit" className={`w-max px-5 h-14 rounded-md ${isValid?"bg-cyan-900":"bg-gray-600"}  text-white`}>Submit</button>
        </form>
    )
}
