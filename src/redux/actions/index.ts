export interface IExpense {
    expenseTitle: string;
    expenseDescription: string;
    expenseAmount: number;
}

export interface IIncome {
    incomeTitle: string;
    incomeDescription: string;
    incomeAmount: number;
}

export const addExpense = (expense: IExpense) => ({
    type: 'ADD_EXPENSE',
    ...expense
});

export const addIncome = (income: IIncome) => ({
    type: 'ADD_INCOME',
    ...income
})

export const setListType = (listType: any) => ({
    type: 'SET_LIST_TYPE',
    listType
})

export const ListTypes = {
    INCOME_LIST: "INCOME_LIST",
    EXPENSE_LIST: "EXPENSE_LIST"
}