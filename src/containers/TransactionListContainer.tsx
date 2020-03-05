import React, { Component } from 'react';
import { connect } from 'react-redux';
import TransactionItem from '../components/TransactionItem';
import { ITransaction, fetchTransactions, deleteTransaction } from '../redux/actions/index';
import './TransactionListContainer.scss';
import { List } from '@material-ui/core';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import AddTransactionForm from './AddTransactionForm';
import { useHistory } from "react-router-dom";


class TransactionList extends Component<{ transactions: any, fetchTransactions: any, deleteTransaction: any }, { selectedDelete: any, deleteModal: any, deleteNotif: any }> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedDelete: 0,
            deleteModal: false,
            deleteNotif: false
        };
    }
    public history = useHistory();

    componentDidMount() {
        this.props.fetchTransactions();
    }

    render() {
        if (this.props.transactions.length) {
            return (
                // <BrowserRouter>
                <div>
                    <div className='trans-list'>
                        <List>
                            {this.props.transactions.map((transaction: ITransaction, id: number) => (
                                
                                    <TransactionItem  {...transaction} onClick={() => this.setState({ selectedDelete: transaction.id })} />
                            ))}
                        </List>
                    </div>
                </div>
                // </BrowserRouter>
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


