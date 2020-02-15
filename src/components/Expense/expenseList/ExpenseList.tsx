import React from 'react'
import ExpenseItem, { IExpenseItem } from './expenseItem/ExpenseItem';

const ExpenseList = (expenses: IExpenseItem[]) => {
    return (
        <ul>
            {expenses.map((expense, index) => (
                <ExpenseItem key={index} {...expense}/>
            ))}
        </ul>
    )
}

export default ExpenseList;