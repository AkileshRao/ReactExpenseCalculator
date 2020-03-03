import { connect } from 'react-redux';
import React, { useState } from 'react'
import { MyButton, MyButtonGroup, MyInput, MyTextarea } from '../util/formComponents';
import { addTransaction, fetchTransactions } from '../redux/actions/index';
import { Formik, Form } from 'formik';
import './AddTransactionForm.scss';
import * as Yup from 'yup';
import { ButtonGroup } from '@material-ui/core';

const AddTransactionForm = ({ dispatch }: any) => {

    const [postAddState, setPostAddState] = useState({ success: false, failure: false });

    let successFunc = () => {
        setPostAddState(prevState => ({
            ...prevState,
            success: true
        }))
    }

    let failureFunc = () => {
        setPostAddState(prevState => ({
            ...prevState,
            failure: true
        }))
    }

    return (
        <div>
            <div className='transaction-form'>
                <Formik
                    initialValues={{
                        transactionTitle: '',
                        transactionDescription: '',
                        transactionAmount: 0,
                        transactionType: ''
                    }}

                    validationSchema={
                        Yup.object({
                            transactionTitle: Yup.string()
                                .min(5, "Must have at least 5 characters")
                                .max(20, "Must be 20 characters or less")
                                .required("Required"),
                            transactionDescription: Yup.string()
                                .min(10, "Please add at least 10 characters")
                                .max(250, "Must be less than 250 characters."),
                            transactionAmount: Yup.number()
                                .required("Required"),
                            transactionType: Yup.string()
                                .required("Required")
                        })
                    }

                    onSubmit={(values, { setSubmitting }) => {
                        dispatch(addTransaction(values)).then(successFunc, failureFunc);
                        dispatch(fetchTransactions());
                        setSubmitting(false);
                    }}
                >
                    <Form className='trans_form'>
                        <MyButtonGroup name='transactionType' className='trans_type' />
                        <MyInput name='transactionTitle' type='text' placeholder='Transaction Title' className='trans_title' />
                        <MyInput name='transactionAmount' type='text' placeholder='Transaction Amount' className='trans_amount' />
                        <MyTextarea name='transactionDescription' placeholder='Transaction Description' className='trans_desc' />
                        <MyButton className='trans_submit' type='submit'>Submit</MyButton>
                    </Form>
                </Formik>
            </div >
        </div>
    )
}

export default connect()(AddTransactionForm);