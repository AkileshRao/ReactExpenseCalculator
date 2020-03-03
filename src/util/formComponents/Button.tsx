import React from 'react';
import Button from '@material-ui/core/Button';

const MyButton = (props: any) => {
    return (
        <div>
            <Button variant="contained" color="primary">
                {props.name}
            </Button>
        </div>
    );
};

export default MyButton;