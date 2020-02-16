import React from 'react';
import AddTransactionForm from '../containers/AddTransactionForm';
import TransactionListContainer from '../containers/TransactionListContainer';

const  Main = () => {
    return(
        <div>
            <AddTransactionForm />
            <TransactionListContainer />
        </div>
    )
}

export default Main;