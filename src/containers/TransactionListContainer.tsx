import React, { useEffect, Component } from 'react';
import { connect } from 'react-redux';
import TransactionItem from '../components/TransactionItem';
import { ITransaction, fetchTransactions } from '../redux/actions/index';
import './TransactionListContainer.scss';


class TransactionList extends Component<{ transactions: any, fetchTransactions: any }> {

    componentDidMount() {
        this.props.fetchTransactions();
    }

    render() {
        if (this.props.transactions.length) {
            return (
                <div className='trans-list'>
                    <ul>
                        {this.props.transactions.map((transaction: ITransaction, id: number) => (
                            <TransactionItem key={id} {...transaction} />
                        ))}
                    </ul>
                </div >
            )
        }
        else {
            return (<div>No transactions</div>)
        }
    }
}

const mapStateToProps = (state: any) => ({
    transactions: state.transactions,
});

const mapDispatchToProps = { fetchTransactions };

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
































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