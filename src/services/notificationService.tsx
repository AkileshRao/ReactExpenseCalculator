import * as React from 'react';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react';

export const SuccessMessage = (message: string) => (
    <MessageBar messageBarType={MessageBarType.success} isMultiline={false}>
        {message}
    </MessageBar>
)

export const ErrorMessage = (message: string) => (
    <MessageBar messageBarType={MessageBarType.error} isMultiline={false}>
        {message}
    </MessageBar>
)

export const WarningMessage = (message: string) => (
    <MessageBar messageBarType={MessageBarType.warning} isMultiline={false}>
        {message}
    </MessageBar>
)