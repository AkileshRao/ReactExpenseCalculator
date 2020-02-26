import axios from 'axios';
import { ErrorMessage, SuccessMessage, WarningMessage } from '../../services/notificationService';

export const FETCH_TRANSACTIONS = "FETCH_TRANSACTIONS";
export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const apiUrl = "http://localhost:3001/transactions";

export interface ITransaction {
    transactionTitle: string;
    transactionDescription: string;
    transactionAmount: number;
    transactionType: string;
    id?: number
}


export const setFilter = (filter: any) => ({
    type: 'FILTER',
    filter
});

export const FilterTypes = {
    ALL: "ALL",
    INCOME: "INCOME",
    EXPENSE: "EXPENSE"
}


export const fetchTransactions = () => {
    return (dispatch: any) => {
        return axios.get(apiUrl).then(res => {
            console.log(res);
            dispatch({ type: FETCH_TRANSACTIONS, transactions: res.data });
        }).catch(error => { throw (error); })
    }
}

export const addTransaction = (transaction: ITransaction) => {
    return (dispatch: any) => {
        return axios.post(apiUrl, transaction).then(res => {
            console.log(res);
            dispatch({ type: ADD_TRANSACTION, transaction: res.data });
        })
    }
}
