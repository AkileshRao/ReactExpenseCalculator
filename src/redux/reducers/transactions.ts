
const addTransaction = (state = [], action: any) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return [
                ...state,
                {
                    transactionId: state.length,
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

const initialState = {
    transactions: [],
};


const transactions = (state = initialState, action: any) => {
    switch (action.type) {
        case "FETCH_TRANSACTIONS":
            return action.transactions
        default:
            return state
    }
}

export { addTransaction, transactions };