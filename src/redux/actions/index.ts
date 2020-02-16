export interface ITransaction {
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
})

export const FilterTypes = {
    ALL: "ALL",
    INCOME: "INCOME",
    EXPENSE: "EXPENSE"
}