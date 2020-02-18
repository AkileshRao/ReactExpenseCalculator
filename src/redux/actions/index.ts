import { HttpService } from "../../services/httpService";
import axios from 'axios';
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

export const fetchTransactionsBegin = () => ({
    type: "FETCH_TRANSACTIONS_BEGIN"
});

export const fetchTransactionsSuccess = (transactions: any) => ({
    type: "FETCH_TRANSACTION_SUCCESS",
    payload: { transactions }
})

export const fetchTransactionsError = (error: any) => ({
    type: "FETCH_TRANSACTION_SUCCESS",
    payload: { error }
})

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
    console.log("happened")
    return (dispatch: any) => {
        console.log("dispatch")
        dispatch(fetchTransactionsBegin());
        console.log("fetch begun")
        // const http: HttpService = new HttpService();
        return axios.get("http://localhost:3001/transactions").then(res => {
            console.log("happened too");
            console.log(res);
            dispatch(fetchTransactionsSuccess(res.data));
            return res.data;
        }).catch(error => dispatch(fetchTransactionsError(error)))
    }
}

function handleErrors(response: any) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}