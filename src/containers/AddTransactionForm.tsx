import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react'
import { Input, Button, Textarea } from '../util/formComponents';
import { addTransaction } from '../redux/actions/index';
import axios from 'axios';

const url = "http://localhost:3001";

const AddTransactionForm = ({ dispatch }: any) => {
    let initialState = {
        transactionId: 0,
        transactionTitle: '',
        transactionDescription: '',
        transactionAmount: 0,
        transactionType: "EXPENSE"
    };

    const [transaction, setTransaction] = useState(initialState);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(addTransaction(transaction));
        // axios.post(`${url}/transactions`, {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(transaction)
        // }).then(res => {
        //     console.log(res);
        // })
    }

    const handleInput = (e: any) => {
        let { value, name } = e.target;
        setTransaction(prevTransaction => ({
            ...prevTransaction,
            [name]: value
        }));
    }

    // useEffect(() => {
    //     console.log(transaction);
    // })
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input
                    name={'transactionTitle'}
                    title={'Add transaction'}
                    inputType={'text'}
                    handleChange={handleInput}
                >
                </Input>
                <Textarea
                    name={'transactionDescription'}
                    title={'transaction Description'}
                    handleChange={handleInput}></Textarea>
                <Input
                    name={'transactionAmount'}
                    title={'Add amount'}
                    inputType={'number'}
                    handleChange={handleInput}
                />
                <Input
                    name={'transactionType'}
                    inputType={'radio'}
                    value={"INCOME"}
                    handleChange={handleInput}
                />INCOME
                <Input
                    name={'transactionType'}
                    value={'EXPENSE'}
                    inputType={'radio'}
                    handleChange={handleInput}
                />EXPENSE
                <Button action={handleSubmit} value='Submit transaction' />
            </form>
        </div >
    )
}

export default connect()(AddTransactionForm);