import React from 'react'

export interface IExpenseItem {
    title: string,
    description: string,
    amount: number
}

const ExpenseItem = (item: IExpenseItem) => {
    return (
        <div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>{item.amount}</p>
        </div>
    )
}

export default ExpenseItem;