import React, { useState, useEffect } from 'react'
import { Input, Button, CheckBox, Textarea } from '../../formComponents'

const AddExpenseForm = () => {
    let initialState = {
        expenseTitle: '',
        expenseDescription: '',
        expenseAmount: ''
    }
    const [expense, setexpense] = useState(initialState);

    const handleSubmit = () => {
        setexpense(prevExpense => ({
            ...prevExpense,
            expenseTitle : "Ah here we go again"
        }));
        console.log(expense);
    }
    
    const decreaseExpense = () => {
        console.log("Expense Decreased");
    }
    
    const increaseExpense = () => {
        console.log("Expense Increased");
    }

    return (
        <div>
            <Input name={'expense'} title={'Add Expense'} inputType={'text'}></Input>
            <Textarea name={'expenseDesc'} title={'Expense Description'} ></Textarea>
            <Button action={decreaseExpense}>-</Button>
            <Button action={increaseExpense}>+</Button>
            <Button action={handleSubmit}>Submit Expense</Button>
        </div>
    )
}

export default AddExpenseForm;