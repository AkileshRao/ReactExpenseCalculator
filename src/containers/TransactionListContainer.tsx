import React, { Component } from 'react';
import { connect } from 'react-redux';
import TransactionItem from '../components/TransactionItem';
import { ITransaction, fetchTransactions, deleteTransaction } from '../redux/actions/index';
import './TransactionListContainer.scss';
import { List, Dialog, DialogTitle } from '@material-ui/core';


class TransactionList extends Component<{ transactions: any, fetchTransactions: any, deleteTransaction: any }, { selectedDelete: any, deleteModal: any, deleteNotif: any }> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedDelete: 0,
            deleteModal: false,
            deleteNotif: false
        };
    }
    componentDidMount() {
        this.props.fetchTransactions();
    }

    render() {
        if (this.props.transactions.length) {
            return (
                <div>

                    <div className='trans-list'>
                        <List>
                            {this.props.transactions.map((transaction: ITransaction, id: number) => (
                                <TransactionItem key={id} {...transaction} onClick={() => this.setState({ selectedDelete: transaction.id })} />
                            ))}
                        </List>
                    </div>
                </div>
            )
        }
        else {
            return (<div>No transactions</div>)
        }
    }
}

const mapStateToProps = (state: any) => {
    return {
        transactions: state.transactions.transactions
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchTransactions: () => dispatch(fetchTransactions()),
        deleteTransaction: (id: number) => dispatch(deleteTransaction(id))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);


