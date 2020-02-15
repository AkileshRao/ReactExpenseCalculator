import React from 'react';
import AddExpenseForm from '../Expense/addExpense/AddExpenseForm';
import ExpenseList from '../Expense/expenseList/ExpenseList';

const  Main = () => {
    return(
        <div>
            <ExpenseList />
            <AddExpenseForm />
        </div>
    )
}

export default Main;