import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Form, type IFormData, type TCategory } from './components/Form'
import { ExpenseCard } from './components/ExpenseCard'

export interface IExpense {
  id: number,
  name: string,
  category: TCategory,
  amount: number
}
const initialExpenses: IExpense[] = [
  {
    id: Date.now(), 
  name: "KFS",
  category: "food",
  amount: 15
  },
  {
    id: Date.now() + 1,
    name: "Netflix",
    category: "fun",
    amount: 19.99
  }
]
 export function App() {

  const [expenses, setExpenses] = useState<IExpense[]>(initialExpenses)
  const [total, setTotal] = useState(0) 
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    amount: 0,
    category: ""
  })
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
e.preventDefault()
const newExpense = {
  ...formData,
  id: Date.now()
}
setExpenses((old) => [...old, newExpense])
 }
 
  useEffect(() => { 
    console.log(expenses)
setTotal(expenses.reduce(
  (acc, el) => +acc + +el.amount ,
  0
)) 
  },
[expenses]) 

  return (
    <div className="app">
    <h1>Expense Tracker</h1>
    {/* Input Form */}
    <Form formData={formData}
    setFormData={setFormData}
    handleSubmit={handleSubmit} />
    <div className="total">Total: ${Math.round(total)}</div>
    {/* Expense List */}
    {expenses.map((el) => <ExpenseCard {...el} />)} 
</div>
  )
}


