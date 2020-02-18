import React, { useEffect, Component } from 'react';
import { connect } from 'react-redux';
import TransactionItem from '../components/TransactionItem';
import { FilterTypes, ITransaction, fetchTransactions } from '../redux/actions/index';

const TransactionList = ({ transactions, loading, error }: any) => {

    console.log(transactions);
    return (
        <div>
            <ul>
                {transactions.transactions.map((transaction: ITransaction, id: number) => (
                    <TransactionItem key={id} {...transaction} />
                ))}
            </ul>
        </div >
    )
}

const mapStateToProps = (state: any) => ({
    transactions: state.transactions,
    loading: state.transactions.loading,
    error: state.transactions.error
});

const mapDispatchToProps = (dispatch: any) => ({
    useEffect : dispatch(fetchTransactions())
})

// const getList = (transactions: ITransaction[], filter: any) => {
//     // console.log(transactions);
//     switch (filter) {
//         case FilterTypes.ALL:
//             return transactions;
//         case FilterTypes.EXPENSE:
//             return transactions.filter((t: ITransaction) => t.transactionType === "EXPENSE");
//         case FilterTypes.INCOME:
//             return transactions.filter((t: ITransaction) => t.transactionType === "INCOME");
//         default:
//             throw new Error("Unknown Filter : " + filter);
//     }
// }

// const mapStateToProps = (state: any) => {
//     // console.log(state)
//     return {
//         transactions: getList(state.transactions, state.setFilter)
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);