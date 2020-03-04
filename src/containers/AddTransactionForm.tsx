import { connect } from 'react-redux';
import React, { useState } from 'react'
import { MyButton, MyRadioGroup, MyInput, MyTextarea } from '../util/formComponents';
import { addTransaction, fetchTransactions } from '../redux/actions/index';
import { Formik, Form } from 'formik';
import './AddTransactionForm.scss';
import * as Yup from 'yup';

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

    let options = [{
        value: "income",
        label: "Income"
    },
    {
        value: "expense",
        label: "Expense"
    }];

    return (
        <div>
            <div className='transaction-form'>
                <Formik
                    initialValues={{
                        transactionTitle: '',
                        transactionDescription: '',
                        transactionAmount: 0,
                        transactionType: 'expense'
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
                        })
                    }

                    onSubmit={(values, { setSubmitting }) => {
                        console.log(values);

                        // dispatch(addTransaction(values)).then(successFunc, failureFunc);
                        // dispatch(fetchTransactions());
                        // setSubmitting(false);
                    }}
                >
                    <Form className='trans_form'>
                        <div className="my-form-group radio-container">
                            <MyRadioGroup
                                name='transactionType'
                                className='trans_type'
                                options={options} />
                        </div>
                        <div className="my-form-group">
                            <MyInput name='transactionTitle' type='text' placeholder='Transaction Title' className='trans_title' />
                        </div>
                        <div className="my-form-group">
                            <MyInput name='transactionAmount' type='text' placeholder='Transaction Amount' className='trans_amount' />
                        </div>
                        <div className="my-form-group">
                            <MyTextarea name='transactionDescription' placeholder='Transaction Description' className='trans_desc' />
                        </div>
                        <div className='my-form-group btn-container'>
                            <MyButton className='trans_submit' type='submit' name="Add">Submit</MyButton>
                        </div>
                    </Form>
                </Formik>
            </div >
        </div>
    )
}

export default connect()(AddTransactionForm);