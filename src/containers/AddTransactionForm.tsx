import { connect } from 'react-redux';
import React from 'react'
import { Input, Button, Textarea, Radio } from '../util/formComponents';
import { addTransaction, fetchTransactions } from '../redux/actions/index';
import { Formik, Form } from 'formik';
import './AddTransactionForm.scss';
import { IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import * as Yup from 'yup';

const AddTransactionForm = ({ dispatch }: any) => {
    const options: IChoiceGroupOption[] = [
        { key: 'expense', text: 'Expense', iconProps: { iconName: 'Sad' } },
        { key: 'income', text: 'Income', iconProps: { iconName: 'Emoji2' } },
    ];

    return (
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
                    dispatch(addTransaction(values));
                    dispatch(fetchTransactions());
                    setSubmitting(false);
                }}
            >
                <Form className='trans_form'>
                    <Radio name='transactionType' options={options} className='trans_type' />
                    <Input name='transactionTitle' type='text' placeholder='Transaction Title' className='trans_title' />
                    <Input name='transactionAmount' type='text' placeholder='Transaction Amount' className='trans_amount' />
                    <Textarea name='transactionDescription' placeholder='Transaction Description' className='trans_desc' />
                    <Button className='trans_submit' type='submit'>Submit</Button>
                </Form>
            </Formik>
        </div >
    )
}

export default connect()(AddTransactionForm);