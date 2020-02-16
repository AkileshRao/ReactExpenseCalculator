import React from 'react'
import { ITransaction } from '../redux/actions';

const TransactionItem = (item: ITransaction) => {
    return (
        <div>
            <p>{item.transactionId}</p>
            <h1>{item.transactionTitle}</h1>
            <p>{item.transactionDescription}</p>
            <p>{item.transactionAmount}</p>
            <p>{item.transactionType}</p>
        </div>
    )
}

export default TransactionItem;