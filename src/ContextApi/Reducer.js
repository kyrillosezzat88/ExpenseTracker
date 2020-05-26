//create Reducer 
export default  (state , action) => {
    switch (action.type) {
        case 'GET_TRANSACTIONS':
            return{
                transactions:action.data,
                Income:action.Income,
                Expense:action.Expense,
                error:null,
                loading:false
            }
        case 'ADD_TRANSACTIONS':
            return{
                ...state,
                transactions:[...state.transactions , {id:Math.floor(Math.random() * 10) , Text:action.Text , Amount:action.Amount}],
                Income: action.Amount > 0 ?( state.Income + action.Amount) : state.Income ,
                Expense:action.Amount < 0 ? (state.Expense + action.Amount) : state.Expense,
            }
        case 'REMOVE_TRANSACTIONS':
            return{
                ...state,
                transactions:state.transactions.filter(itm => itm._id !== action.id),
                Income: state.transactions.find(itm => itm._id === action.id).Amount > 0 ?  state.Income - state.transactions.find(itm => itm._id === action.id).Amount : state.Income ,
                Expense: state.transactions.find(itm => itm._id === action.id).Amount < 0 ?  state.Expense - state.transactions.find(itm => itm._id === action.id).Amount : state.Expense,
            }
        default:
            return state
    }
}
