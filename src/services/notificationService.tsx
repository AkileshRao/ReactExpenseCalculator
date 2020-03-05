import * as React from 'react';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

export default class Notification {
    public success(message: string, handleClose: any) {
        return (
            <Snackbar open={true} autoHideDuration={3000} onClose={handleClose}>
                <Alert severity="success">
                    {message}
                </Alert>
            </Snackbar>
        )
    }

    public error(message: string, handleClose: any) {
        return (
            <Snackbar open={true} autoHideDuration={3000} onClose={handleClose}>
                <Alert severity="error">
                    {message}
                </Alert>
            </Snackbar>
        )
    }

    public warning(message: string, handleClose: any) {
        return (
            <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
                <Alert severity="warning">
                    {message}
                </Alert>
            </Snackbar>
        )
    }
}