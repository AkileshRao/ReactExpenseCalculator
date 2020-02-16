import React from 'react';
import TransactionItem from './transactionItem/TransactionItem';


const TransactionList = ({ transactions }: any) => (
    <ul>
        {transactions.map((transaction: any, id: number) => (
            <TransactionItem key={id} {...transaction} />
        ))}
    </ul>
)

export default TransactionList;