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
    type : 'ADD_INCOME',
    ...income
})