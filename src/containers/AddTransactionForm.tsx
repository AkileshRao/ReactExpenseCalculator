import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react'
import { Input, Button, Textarea, CheckBox } from '../util/formComponents';
import { addTransaction } from '../redux/actions/index';
import './AddTransactionForm.scss';
import { IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';

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

    const options: IChoiceGroupOption[] = [
        { key: 'expense', text: 'Expense', iconProps: { iconName: 'Sad' } },
        { key: 'income', text: 'Income', iconProps: { iconName: 'Emoji2' } },
    ];

    return (
        <div className='transaction-form'>
            <form onSubmit={handleSubmit}>
                <div className='row-1'>
                    <Input
                        label={"Title"}
                        name={'transactionTitle'}
                        title={'Add transaction'}
                        inputType={'text'}
                        handleChange={handleInput}
                    />

                    <Input
                        label={'Amount'}
                        name={'transactionAmount'}
                        title={'Add amount'}
                        inputType={'number'}
                        handleChange={handleInput}
                    />
                </div>
                <Textarea
                    label={'Description'}
                    name={'transactionDescription'}
                    title={'transaction Description'}
                    handleChange={handleInput} />

                <CheckBox
                    name={'Transaction Type'}
                    title={'Transaction Type'}
                    options={options}
                    label={'Type of transaction'}
                />
                
                <Button action={handleSubmit} value='Submit transaction' />
            </form>
        </div >
    )
}

export default connect()(AddTransactionForm);