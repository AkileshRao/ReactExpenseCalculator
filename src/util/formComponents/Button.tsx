import React from 'react';
import { DefaultButton, PrimaryButton, Stack, IStackTokens } from 'office-ui-fabric-react';

interface IButtonParams {
    type?: string;
    action: any;
    value: string;
}

const Button: React.FunctionComponent<IButtonParams> = (props) => {
    return (
        <PrimaryButton text={props.value} onClick={props.action} />
    );
};

export default Button;