const expenses = (state = [], action: any) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                {
                    id: action.id,
                    expenseTitle: action.expenseTitle,
                    expenseDescription: action.expenseDescription,
                    expenseAmount: action.expenseAmount
                }
            ]

        default:
            return state
    }
}

export default expenses;