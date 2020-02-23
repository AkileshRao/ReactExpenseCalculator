import React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react';

const Button = (props: any) => {
    return (
        <div>
            <PrimaryButton {...props} />
        </div>
    );
};

export default Button;