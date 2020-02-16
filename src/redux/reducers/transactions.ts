const transactions = (state = [], action: any) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return [
                ...state,
                {
                    transactionId : state.length,
                    transactionTitle: action.transactionTitle,
                    transactionDescription: action.transactionDescription,
                    transactionAmount: action.transactionAmount,
                    transactionType: action.transactionType
                }   
            ]

        default:
            return state
    }
}

export default transactions;