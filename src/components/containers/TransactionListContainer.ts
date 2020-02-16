import { connect } from 'react-redux';
import TransactionList from '../Transactions/transactionList/TransactionList';
import { FilterTypes, ITransaction } from '../../redux/actions/index';

const getList = (transactions: ITransaction[], filter: any) => {
    console.log(transactions);
    switch (filter) {
        case FilterTypes.ALL:
            return transactions;
        case FilterTypes.EXPENSE:
            return transactions.filter((t: ITransaction) => t.transactionType === "EXPENSE");
        case FilterTypes.INCOME:
            return transactions.filter((t: ITransaction) => t.transactionType === "INCOME");
        default:
            throw new Error("Unknown Filter : " + filter);
    }
}

const mapStateToProps = (state: any) => {
    return {
        transactions: getList(state.transactions, state.setFilter)
    }
}

export default connect(mapStateToProps)(TransactionList);