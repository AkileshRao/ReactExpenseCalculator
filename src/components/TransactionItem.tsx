import React from 'react'
import { ITransaction } from '../redux/actions';
import { IPersonaSharedProps, Persona, PersonaInitialsColor, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import './TransactionItem.scss';

const TransactionItem = (item: ITransaction) => {
    return (
        <div className='trans-item'>
            <Persona
                text={item.transactionTitle}
                secondaryText={item.transactionDescription}
                size={PersonaSize.size48}
                imageInitials={item.transactionAmount+""}
                initialsColor={item.transactionType === "INCOME" ? PersonaInitialsColor.lightGreen : PersonaInitialsColor.lightRed}
            />
        </div>
    )
}

export default TransactionItem;