import React from 'react'
import { ITransaction } from '../redux/actions';
import { Persona, PersonaInitialsColor, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import './TransactionItem.scss';

const TransactionItem = (item: ITransaction) => {
    return (
        <div className='trans-item' onClick={item.onClick}>
            <Persona
                text={item.transactionTitle}
                secondaryText={item.transactionDescription}
                size={PersonaSize.size48}
                imageInitials={item.transactionAmount + ""}
                initialsColor={item.transactionType === "income" ? PersonaInitialsColor.lightGreen : PersonaInitialsColor.lightRed}
            />
            
        </div>
    )
}

export default TransactionItem;