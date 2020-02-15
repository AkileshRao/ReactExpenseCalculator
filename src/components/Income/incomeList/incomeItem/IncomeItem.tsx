import React from 'react'

export interface IIncomeItem {
    title: string,
    description: string,
    amount: number
}

const IncomeItem = (item: IIncomeItem) => {
    return (
        <div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>{item.amount}</p>
        </div>
    )
}

export default IncomeItem;