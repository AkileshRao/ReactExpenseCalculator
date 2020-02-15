import React, { useState, useEffect } from 'react'
import { Input, Button, Textarea } from '../../formComponents'
import axios from 'axios';


const url = "http://localhost:3001";

const AddExpenseForm = () => {
    let initialState = {
        id: 0,
        expenseTitle: '',
        expenseDescription: '',
        expenseAmount: ''
    }
    const [expense, setExpense] = useState(initialState);

    const handleSubmit = () => {
        axios.post(`${url}/expenses`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(expense)
        }).then(res => {
            console.log(res);
        })
    }

    const getExpenses = () => {
        axios.get(`${url}/expenses`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json"
            }
        }).then((res:any) => {
            console.log(res.data);
        })
    }

    const decreaseExpense = () => {
        console.log("Expense Decreased");
    }

    const increaseExpense = () => {
        console.log("Expense Increased");
    }

    const handleInput = (e: any) => {
        let { value, name } = e.target;
        setExpense(prevExpense => ({
            ...prevExpense,
            [name]: value
        }));
    }


    // useEffect(() => {
    //     console.log(expense)
    // }, [expense])

    // useEffect(() => {
    //     fetch(`${url}/expenses`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': "application/json"
    //         }
    //     }).then((res:any) => {
    //         console.log(res);
    //     })
    // });
    return (
        <div>
            <Input
                name={'expenseTitle'}
                title={'Add Expense'}
                inputType={'text'}
                handleChange={handleInput}
            >
            </Input>
            <Textarea
                name={'expenseDescription'}
                title={'Expense Description'}
                handleChange={handleInput}></Textarea>
            <Button action={decreaseExpense}>-</Button>
            <Button action={increaseExpense}>+</Button>
            <Button action={handleSubmit}>Submit Expense</Button>
            <Button action={getExpenses}/>
        </div>
    )
}

export default AddExpenseForm;