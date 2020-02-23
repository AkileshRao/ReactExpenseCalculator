import React from 'react';
import AddTransactionForm from '../containers/AddTransactionForm';
import TransactionListContainer from '../containers/TransactionListContainer';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import './Main.scss';

const Main = () => {
    return (
        <div className='main'>

            {/* <Footer /> */}
            <Pivot aria-label="Basic Pivot Example">
                <PivotItem
                    headerText="Add transaction"
                >
                    <AddTransactionForm />
                </PivotItem>
                <PivotItem headerText="My transactions">
                    <TransactionListContainer />
                </PivotItem>

            </Pivot>
        </div>
    )
}

export default Main;