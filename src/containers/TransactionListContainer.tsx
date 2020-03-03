import React, { Component } from 'react';
import { connect } from 'react-redux';
import TransactionItem from '../components/TransactionItem';
import { ITransaction, fetchTransactions, deleteTransaction } from '../redux/actions/index';
import './TransactionListContainer.scss';


class TransactionList extends Component<{ transactions: any, fetchTransactions: any, deleteTransaction: any }> {

    componentDidMount() {
        this.props.fetchTransactions();
    }

    render() {
        if (this.props.transactions.length) {
            return (
                <div className='trans-list'>
                    <ul>
                        {this.props.transactions.map((transaction: ITransaction, id: number) => (
                            <TransactionItem key={id} {...transaction} onClick={() => this.props.deleteTransaction(transaction.id)} />
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

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchTransactions: () => dispatch(fetchTransactions()),
        deleteTransaction: (id: number) => dispatch(deleteTransaction(id))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);


