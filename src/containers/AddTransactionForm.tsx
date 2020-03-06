import { connect } from 'react-redux';
import React, { useState } from 'react'
import { MyButton, MyRadioGroup, MyInput, MyTextarea } from '../util/formComponents';
import { addTransaction, fetchTransactions } from '../redux/actions/index';
import { Formik, Form } from 'formik';
import Notification from '../services/notificationService';
import './AddTransactionForm.scss';
import * as Yup from 'yup';
import { withRouter } from 'react-router';


const mapStateToProps = (state: any) => {
    return { transactions: state.transactions }
}


const AddTransactionForm = ({ dispatch, transactions, match, ...props }: any) => {
    let notification = new Notification();
    const [postAddState, setPostAddState] = useState(null);

    let successFunc = () => {
        setPostAddState('success')
    }

    let failureFunc = () => {
        setPostAddState('error')
    }

    let options = [{
        value: "income",
        label: "Income"
    },
    {
        value: "expense",
        label: "Expense"
    }];

    const handleClose = () => {
        setPostAddState(null)
    }

    // console.log(match.params.transactionId);
    // transactions.transactions.map(t => console.log(t)
    // )

    console.log(transactions.transactions.filter((trans: any) => trans.id == match.params.transactionId));

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
                        })
                    }

                    onSubmit={(values, { setSubmitting }) => {
                        dispatch(addTransaction(values)).then(successFunc, failureFunc);
                        dispatch(fetchTransactions());
                        setSubmitting(false);
                        // notification.success("Lets go boi");
                    }}
                >

                    <Form className='trans_form'>
                        <div>
                            {postAddState === "success" ? notification.success("Transaction added successfully", handleClose) :
                                (postAddState === "error" ? notification.error("Something went wrong", handleClose) : null)}
                        </div>
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

export default connect(mapStateToProps)(withRouter(AddTransactionForm));