import { useEffect, type Dispatch, type SetStateAction } from "react"
import type { IExpense } from "../App"

export type TCategory = "food" | "transport" | "fun" | ""

export interface IFormData extends Omit<IExpense, "id"> { }

interface IFormProps {
    formData: IFormData,
    setFormData: Dispatch<SetStateAction<IFormData>>,
    handleSubmit:(e: React.FormEvent<HTMLFormElement>) => void
}

const categoriesButtons = [
[
    "", "Select category"
],
[
   "food", "Food"
],
[
    "transport", "Transport"
],
[
    "fun", "Fun"
]
]


export const Form = ({ formData, setFormData, handleSubmit }: IFormProps) => {

    const handleFormChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target
        setFormData((old) => ({ ...old, [name]: value }))
    }

    useEffect(() => {console.log(formData)}, [formData])

    return (
        <form onSubmit={handleSubmit} className="form">
            <input onChange={handleFormChange} value={formData.name} type="text" placeholder="Expense title" name="name" />
            <input onChange={handleFormChange} value={formData.amount} type="number" placeholder="Amount" name="amount" />
            <select onChange={handleFormChange} value={formData.category} name="category">
            
                {categoriesButtons.map((el) => <option value={el[0]}> {el[1]}</option> )}
               
            </select>
            <button>Add Expense</button>
        </form>

    )
}
