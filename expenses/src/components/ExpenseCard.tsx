import type { IExpense } from "../App"

interface IExpenseCardProps extends IExpense {}

export const ExpenseCard = ({name, id, category, amount}: IExpenseCardProps) =>{
return (
    <div className="expense">
        <div>
            {name}

            <div className="category">{category} </div>
        </div>
        <div className="amount">{amount}</div>
    </div>
) 
}
