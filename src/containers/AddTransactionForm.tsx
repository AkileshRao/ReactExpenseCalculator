import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react'
import { Input, Button, Textarea, CheckBox } from '../util/formComponents';
import { addTransaction, fetchTransactions } from '../redux/actions/index';
import './AddTransactionForm.scss';
import { IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';

const url = "http://localhost:3001";

const AddTransactionForm = ({ dispatch }: any) => {
    let initialState = {
        transactionTitle: '',
        transactionDescription: '',
        transactionAmount: 0,
        transactionType: ''
    };

    const [transaction, setTransaction] = useState(initialState);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(addTransaction(transaction));
        dispatch(fetchTransactions());
    }

    const handleInput = (e: any) => {
        let { value, name } = e.target;
        setTransaction(prevTransaction => ({
            ...prevTransaction,
            [name]: value
        }));
    }

    const handleCheckbox = (e: any, option: any) => {
        setTransaction(prevTransaction => ({
            ...prevTransaction,
            transactionType: option.key
        }))
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

                <div className="row-1">
                    <CheckBox
                        name={'transactionType'}
                        title={'Transaction Type'}
                        options={options}
                        handleChange={handleCheckbox}
                    />
                </div>
                <div className='row-2'>
                    <Input
                        placeholder={"Title"}
                        name={'transactionTitle'}
                        title={'Add transaction'}
                        inputType={'text'}
                        handleChange={handleInput}
                        className={'trans-title'}
                    />

                    <Input
                        placeholder={'Amount'}
                        name={'transactionAmount'}
                        title={'Add amount'}
                        inputType={'number'}
                        handleChange={handleInput}
                        className={'trans-amount'}
                    />
                </div>
                <div className="row-3">
                    <Textarea
                        placeholder={'Description'}
                        name={'transactionDescription'}
                        title={'transaction Description'}
                        handleChange={handleInput} />

                </div>
                <div className="row-4">
                    <Button action={handleSubmit} value='Submit transaction' />
                </div>
            </form>
        </div >
    )
}

export default connect()(AddTransactionForm);