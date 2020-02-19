import axios from 'axios';
export const FETCH_TRANSACTIONS = "FETCH_TRANSACTIONS";
const apiUrl = "http://localhost:3001/transactions";

export interface ITransaction {
    transactionId: number;
    transactionTitle: string;
    transactionDescription: string;
    transactionAmount: number;
    transactionType: string
}

export const addTransaction = (transaction: ITransaction) => ({
    type: 'ADD_TRANSACTION',
    ...transaction
});

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
