import React from 'react';
import AddTransactionForm from '../containers/AddTransactionForm';
import TransactionListContainer from '../containers/TransactionListContainer';
import Footer from './Footer';

const Main = () => {
    return (
        <div>
            <AddTransactionForm />
            <TransactionListContainer />
            {/* <Footer /> */}
        </div>
    )
}

export default Main;