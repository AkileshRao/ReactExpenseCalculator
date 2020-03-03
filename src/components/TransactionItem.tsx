import React from 'react'
import { ITransaction } from '../redux/actions';
import './TransactionItem.scss';
import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';

const TransactionItem = (item: ITransaction) => {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <ImageIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.transactionTitle} secondary={item.transactionDescription} />
        </ListItem>
    )
}

export default TransactionItem;