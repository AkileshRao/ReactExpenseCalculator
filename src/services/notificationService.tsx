import * as React from 'react';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react';

export const SuccessMessage = (message: string, dismissFunc: any) => (
    <MessageBar messageBarType={MessageBarType.success} isMultiline={false} dismissButtonAriaLabel="Close" onDismiss={dismissFunc}>
        {message}
    </MessageBar>
)

export const ErrorMessage = (message: string, dismissFunc: any) => (
    <MessageBar messageBarType={MessageBarType.error} isMultiline={false} dismissButtonAriaLabel="Close" onDismiss={dismissFunc}>
        {message}
    </MessageBar>
)

export const WarningMessage = (message: string, dismissFunc: any) => (
    <MessageBar messageBarType={MessageBarType.warning} isMultiline={false} dismissButtonAriaLabel="Close" onDismiss={dismissFunc}>
        {message}
    </MessageBar>
)