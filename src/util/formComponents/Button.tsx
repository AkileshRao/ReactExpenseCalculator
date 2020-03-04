import React from 'react';
import Button from '@material-ui/core/Button';

const MyButton = (props: any) => {
    return (
        <Button {...props} variant="contained" color="primary">
            {props.name}
        </Button>
    );
};

export default MyButton;