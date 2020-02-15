const incomes = (state = [], action: any) => {
    switch (action.type) {
        case 'ADD_INCOME':
            return [
                ...state,
                {
                    id: action.id,
                    incomeTitle: action.incomeTitle,
                    incomeDescription: action.incomeDescription,
                    incomeAmount: action.incomeAmount
                }
            ]

        default:
            return state
    }
}

export default incomes;

