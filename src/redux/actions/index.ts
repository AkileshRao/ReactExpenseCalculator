import axios from 'axios';
export const FETCH_TRANSACTIONS = "FETCH_TRANSACTIONS";
export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";
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


export const fetchTransactions: any = () => {
    return (dispatch: any) => {
        return axios.get(apiUrl).then(res => {
            console.log(res);
            dispatch({ type: FETCH_TRANSACTIONS, transactions: res.data });
        }).catch(error => { throw (error); })
    }
}

export const addTransaction: any = (transaction: ITransaction) => {
    return (dispatch: any) => {
        return axios.post(apiUrl, transaction).then(res => {
            dispatch({ type: ADD_TRANSACTION, transaction: res.data });
        })
    }
}

export const deleteTransaction: any = (id: number) => {
    return (dispatch: any) => {
        return axios.delete(`${apiUrl}/${id}`).then(res => {
            dispatch({ type: DELETE_TRANSACTION, transaction_id: id })
        })
    }
}
