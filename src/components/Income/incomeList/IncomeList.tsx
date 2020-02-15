import React from 'react'
import IncomeItem, { IIncomeItem } from './incomeItem/IncomeItem'

const IncomeList = (incomes: IIncomeItem[]) => {
    return (
        <ul>
            {incomes.map((income, index) => {
                <IncomeItem key={index} {...income} />
            })}
        </ul>
    )
}

export default IncomeList;
