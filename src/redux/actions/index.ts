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
    id?: number,
    onClick?: any
}


export const fetchTransactions: any = () => {
    return (dispatch: any) => {
        return axios.get(apiUrl).then(res => {            
            dispatch({ type: FETCH_TRANSACTIONS, transactions: res.data });
        }).catch(error => { throw (error); })
    }
}

export const addTransaction: any = (transaction: ITransaction) => {
    return (dispatch: any) => {
        return axios.post(apiUrl, transaction).then(res => {
            dispatch({ type: ADD_TRANSACTION, transaction: transaction });
        }).catch(error => { throw (error); })
    }
}

export const deleteTransaction: any = (id: number) => {
    return (dispatch: any) => {
        return axios.delete(`${apiUrl}/${id}`).then(res => {
            dispatch({ type: DELETE_TRANSACTION, transaction_id: id })
        }).catch(error => { throw (error); })
    }
}
